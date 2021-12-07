import { useRoute } from "@react-navigation/core"
import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { ListingResult, ListingType, User } from "../../model/auth";
import { listingTypeServiceId } from "../../services/listingType";
import { listingUserById } from "../../services/user";

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

        <Text> {listing.title} </Text>
        <Text> {listing.description} </Text>
        <Text> {listing.price} </Text>
        <Text> {user && user.name} </Text>
        <Text> {listing.creationDate} </Text>
        <Text> {listingType && listingType.name} </Text>
        
        {rating(listing.rating,listing.numberOfRatings)}
        </>
    )
}
