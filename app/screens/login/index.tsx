import React, { useContext, useReducer } from 'react'
import { TextInput, Button, Alert, Text } from 'react-native'
import { AuthContext } from '../../store/context/auth'
import useAuthenticate from './hooks/useAuthenticate'

const LoginScreen = () => {
    const { setLogin, setPassword, authenticate } = useAuthenticate(error => { 
        Alert.alert(error.message)
    })

    const { authState } = useContext(AuthContext)
    

    return <>
        <TextInput 
            placeholder="login"
            onChangeText={setLogin}
            />
        <TextInput
            placeholder="password"
            onChangeText={setPassword}
            />
        <Button 
            title="Login" 
            onPress={authenticate} />
    </>    
}

export default LoginScreen