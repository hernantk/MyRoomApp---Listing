import { AuthResult } from "../../../model/auth";

export interface AuthState {
    userId: string;
    userName: string;
    authToken: string;
    isLoggedIn: boolean;
}

export enum AuthActionType { 
    LOGIN,
    LOGOUT
    
}

export interface AuthAction { 
    type: AuthActionType,
    payload: AuthResult
}