import React, { createContext, useReducer } from 'react'
import { AuthResult } from '../../../model/auth';
import { authReducer, initialState } from '../../reducers/auth';
import { AuthActionType } from '../../reducers/auth/inteface';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [authState, dispatch] = useReducer(authReducer, initialState)

    const login = (authResult: AuthResult) => {
        dispatch({ type: AuthActionType.LOGIN, payload: authResult })
    }

    const logout = () => { 
        dispatch({ type: AuthActionType.LOGOUT, payload: null })
    }




    return (
        <AuthContext.Provider value={{
            authState,
            authActions: { login, logout }
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}