import { UserException } from "../../exception";
import { User } from "../../model/auth"
import api from "../api";
import { URL_USER } from './../routes/index';





export const listingUserById = async(userId:string): Promise<User> => {
    
    try { 
        console.log(userId);
        let result = await (await api.get<User>(`${URL_USER}/${userId}`)).data
        return result
    } catch(error) {
        throw new UserException('Algo deu Errado!')
    }
    
}