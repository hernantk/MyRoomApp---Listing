import React, { useEffect, useState } from "react"
import { Alert, Text } from "react-native"
import { ListingType } from "../../model/auth"
import listingTypeService from "../../services/listingType"
import useNewListing from "./hooks/useNewListing"

export const NewListing = () =>{

    const [listingType,setListingType] = useState<Array<ListingType>>()

    const   [setTitle,
            setDescription,
            setPrice,
            setListingTypeId,
            save] = useNewListing(error => { 
                Alert.alert(error.message)
            })


    useEffect(()=>{
        const load = async()=>{
            setListingType(await listingTypeService())
        }
        load()
    },[])


    return(
        <Text> New Listing  </Text>
    )
}