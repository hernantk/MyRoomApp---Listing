import { Button, Input } from 'native-base'
import React, { useContext, useReducer } from 'react'
import { Alert } from 'react-native'
import { AuthContext } from '../../store/context/auth'
import useAuthenticate from './hooks/useAuthenticate'

const LoginScreen = () => {
    const { setLogin, setPassword, authenticate } = useAuthenticate(error => { 
        Alert.alert(error.message)
    })

    const { authState } = useContext(AuthContext)
    

    return <>
        <Input 
            placeholder="login"
            onChangeText={setLogin}
            />
        <Input
            type="password"
            placeholder="password"
            onChangeText={setPassword}
            />
        <Button 
            onPress={authenticate} >Login</Button>
    </>    
}

export default LoginScreen