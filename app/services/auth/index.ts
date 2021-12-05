import { AuthException } from "../../exception";
import { AuthRequest, AuthResult } from "../../model/auth";
import api from "../api";

export const login = async (loginParams : AuthRequest): Promise<AuthResult> => {

    try { 
        let response = await api.post<AuthResult>("/auth/login", loginParams)
        api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

        return response.data
   
    } catch(error) {
        throw new AuthException('Dados inválidos para o login!')
    }
    
}