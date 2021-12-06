import React, { useContext, useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { ListingResult } from "../../../model/auth"
import listingService from "../../../services/listing"
import { AuthContext } from '../../../store/context/auth/index';
import RenderList from ".."

export const Listing = () =>{

    const [listing,setListing] = useState<Array<ListingResult>>()
    const {authState} = useContext(AuthContext)
    

    useEffect(() => {
        const load = async () => {
            setListing(await listingService(authState.userId))
        }
        load()
        
    },[])

 

    return(
        <SafeAreaView>
               <RenderList data={listing}/>
        </SafeAreaView>
    )
}