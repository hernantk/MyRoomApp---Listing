import { NewListingException } from "../../exception";
import { NewListing } from "../../model/auth";
import api from "../api";
import { URL_LISTING } from './../routes/index';



export const newListingService = async(newListing : NewListing) => {
    
    try { 
         await api.post(URL_LISTING,newListing)
   
    } catch(error) {
        throw new NewListingException('Algo deu Errado!')
    }
    
}

export default newListingService