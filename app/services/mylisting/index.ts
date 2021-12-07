import { ListingException } from "../../exception";
import { ListingResult } from "../../model/auth";
import api from "../api";
import { URL_LISTING } from "../routes";


export interface Response {
      listing: Array<ListingResult>;
  }

export const myListingService = async(userId : String): Promise<Array<ListingResult>> => {
    
    try { 
        return await (await api.get<Response>(URL_LISTING)).data.listing.filter( item =>{
            return item.userId === userId
        })
   
    } catch(error) {
        throw new ListingException('Algo deu Errado!')
    }
    
}

export default myListingService