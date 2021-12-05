import { AxiosResponse } from "axios";
import { ListingException } from "../../exception";
import { ListingResult } from "../../model/auth";
import api from "../api";


export interface Response {
      listing: Array<ListingResult>;
  }

export const listingService = async (): Promise<Array<ListingResult>> => {
    try { 
        let response = await api.get<Response>("/listing")
        
        return response.data.listing
   
    } catch(error) {
        throw new ListingException('Algo deu Errado!')
    }
    
}

export default listingService