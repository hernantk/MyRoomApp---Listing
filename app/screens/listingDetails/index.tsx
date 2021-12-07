import { useRoute } from "@react-navigation/core"
import React, { useEffect, useState } from "react"
import { ListingResult, ListingType, User } from "../../model/auth";
import { listingTypeServiceId } from "../../services/listingType";
import { listingUserById } from "../../services/user";
import { Text } from "native-base"

export const ListingDetails = () =>{

    const route = useRoute()
    const [listingType,setListingType] = useState<ListingType>()
    const [user,setUser] = useState<User>()
    let listing:ListingResult = route.params

    const rating = (rating:number,numberOfRatings:number)=>{
        let result = rating / numberOfRatings
        if(result>0){
            return (<Text>Nota: {result}</Text>)
        }
    }

    useEffect(()=>{
        const getListing = async() => {
            setListingType(await listingTypeServiceId(listing.listingTypeId))
            setUser(await listingUserById(listing.userId))
        }
        getListing()
        
    },[])
    
    
    
    return(<>

        <Text> Titulo: {listing.title} </Text>
        <Text> Descrição: {listing.description} </Text>
        <Text> Preço: {listing.price} </Text>
        <Text> Usuario: {user && user.name} </Text>
        <Text> Data de Criação: {listing.creationDate} </Text>
        <Text> Tipo de Anuncio: {listingType && listingType.name} </Text>
        
        {rating(listing.rating,listing.numberOfRatings)}
        </>
    )
}
