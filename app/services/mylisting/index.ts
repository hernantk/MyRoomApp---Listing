import { ListingException } from "../../exception";
import { ListingResult } from "../../model/auth";
import api from "../api";


export interface Response {
      listing: Array<ListingResult>;
  }

export const myListingService = async(userId : String): Promise<Array<ListingResult>> => {
    
    try { 
        let response = await (await api.get<Response>("/listing")).data.listing.filter( item =>{
            return item.userId === userId
        })
        
        
        return response
   
    } catch(error) {
        throw new ListingException('Algo deu Errado!')
    }
    
}

export default myListingService