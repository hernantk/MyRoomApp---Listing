import React, { useContext, useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import RenderList from ".."
import { ListingResult } from "../../../model/auth"
import myListingService from "../../../services/mylisting"
import { AuthContext } from "../../../store/context/auth"

export const MyListings = () =>{


    const [myListing,setMyListing] = useState<Array<ListingResult>>()
    const {authState} = useContext(AuthContext)

    

    useEffect(() => {
        const load = async () => {
            setMyListing(await myListingService(authState.userId))
        }
        load()
        
    },[])




    return(
        <SafeAreaView>
                <RenderList data={myListing}/>
        </SafeAreaView>
    )
}