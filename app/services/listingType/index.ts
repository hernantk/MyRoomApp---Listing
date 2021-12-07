import { ListingTypeException } from "../../exception";
import { ListingType } from "../../model/auth";

import api from "../api";
import { URL_LISTING_TYPE } from "../routes";


export interface ResponseArray {
    listingTypes: Array<ListingType>;
  }

export interface Response {
    listingTypes: ListingType;
}  

export const listingTypeService = async(): Promise<Array<ListingType>> => {
    
    try { 
        return await (await api.get<ResponseArray>(URL_LISTING_TYPE)).data.listingTypes
    } catch(error) {
        throw new ListingTypeException('Algo deu Errado!')
    }
    
}

export const listingTypeServiceId = async(listingTypeId:string): Promise<ListingType> => {
    
    try { 
        return await (await api.get<Response>(`${URL_LISTING_TYPE}/${listingTypeId}`)).data.listingTypes
    } catch(error) {
        throw new ListingTypeException('Algo deu Errado!')
    }
    
}
