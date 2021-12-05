import React,{ useState, useContext } from 'react'
import { authService } from '../../../../services'
import { AuthContext } from '../../../../store/context/auth'
import { useNavigation } from "@react-navigation/core"
import { ROUTE_TAB } from '../../../../navigation/AppRoutes';
import { TabPaneProps } from 'semantic-ui-react';


const useAuthenticate = (onError: (error: Error) => void) => { 
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const { authActions } = useContext(AuthContext)
    
    const navigation = useNavigation<TabPaneProps>();
    const authenticate = async () => {
        
        
        
        try { 
            
            let result = await authService.login({ 
                login,
                password
            })
            
            navigation.navigate(ROUTE_TAB)    
            authActions.login(result)

        } catch(error) {
            onError(error)
        }
    }

    return { 
        setLogin,
        setPassword,
        authenticate
    }
}

export default useAuthenticate