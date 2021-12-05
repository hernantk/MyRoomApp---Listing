import { useState, useContext } from 'react'
import { authService } from '../../../../services'
import { AuthContext } from '../../../../store/context/auth'

const useAuthenticate = (onError: (error: Error) => void) => { 
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const { authActions } = useContext(AuthContext)
    
    const authenticate = async () => {
        try { 
            let result = await authService.login({ 
                login,
                password
            })    
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