import { useRoute } from "@react-navigation/core"
import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { ListingResult, ListingType } from "../../model/auth";
import listingTypeService from "../../services/listingType";

export const ListingDetails = () =>{

    const route = useRoute()
    const [listingType,setListingType] = useState<Array<ListingType>>()
    let listing:ListingResult = route.params

    const rating = (rating:number,numberOfRatings:number)=>{
        let result = rating / numberOfRatings
        if(result>0){
            return (<Text>Nota: {result}</Text>)
        }
    }

    useEffect(()=>{
        const getListing = async() => {
            setListingType(await listingTypeService())
        }
        getListing()
        
    },[])

    if(listingType){
        console.log(listingType.filter(item=>{
            item._id === listing._id
        }))
    }
    
    return(<>

        <Text> {listing.title} </Text>
        <Text> {listing.description} </Text>
        <Text> {listing.price} </Text>
        <Text> {listing.userId} </Text>
        <Text> {listing.creationDate} </Text>
        {rating(listing.rating,listing.numberOfRatings)}
        </>
    )
}
