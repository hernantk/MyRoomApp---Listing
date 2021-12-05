import { useNavigation } from "@react-navigation/core"
import { Card, FlatList } from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ListingResult } from "../../model/auth"
import { ROUTE_MY_LISTINGS } from "../../navigation/AppRoutes"
import listingService from "../../services/listing"
import { TabPaneProps } from 'semantic-ui-react';
import { ROUTE_LISTING_DETAILHS } from './../../navigation/AppRoutes';

export const Listing = () =>{

    const navigation = useNavigation<TabPaneProps>()
    

    const [listing,setListing] = useState<Array<ListingResult>>()

    

    useEffect(() => {
        const load = async () => {
            setListing(await listingService())
        }
        load()
        console.log(listing);
        
    },[])

    const openItem = (item) => {
        navigation.navigate(ROUTE_LISTING_DETAILHS, item)
    }


    const itemKeyExtractor = useCallback((item) => item._id, [])


    return(
        <SafeAreaView>
                
                <FlatList
                data={listing}
                renderItem={({item})=>{
                    return(
                    <Pressable onPress={()=>openItem(item)}>
                        <Card marginBottom={2} rounded={40}>Teste</Card>
                    </Pressable>
                    )
                }}
                keyExtractor={itemKeyExtractor}/>

            
        </SafeAreaView>
    )
}