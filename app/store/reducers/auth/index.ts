import { AuthAction, AuthState, AuthActionType } from "./inteface";

export const initialState: AuthState = { 
    userId: null, 
    userName: null, 
    authToken: null, 
    isLoggedIn: false
}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionType.LOGIN: 
            return { 
                userId: action.payload.id,
                userName: action.payload.name,
                authToken: action.payload.token,
                isLoggedIn: true
             }
        case AuthActionType.LOGOUT:
            return initialState
        default:
            return state
    }
}