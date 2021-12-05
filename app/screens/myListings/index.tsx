import { useNavigation } from "@react-navigation/core"
import { Card, FlatList, Text } from "native-base"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ListingResult } from "../../model/auth"
import { TabPaneProps } from 'semantic-ui-react';
import { ROUTE_LISTING_DETAILHS } from './../../navigation/AppRoutes';
import { AuthContext } from './../../store/context/auth/index';
import myListingService from "../../services/mylisting"

export const MyListings = () =>{

    const navigation = useNavigation<TabPaneProps>()
    

    const [myListing,setMyListing] = useState<Array<ListingResult>>()
    const {authState} = useContext(AuthContext)

    

    useEffect(() => {
        const load = async () => {
            setMyListing(await myListingService(authState.userId))
        }
        load()
        
    },[])

    const openItem = (item) => {
        navigation.navigate(ROUTE_LISTING_DETAILHS, item)
    }

    const rating = (rating:number,numberOfRatings:number)=>{
            let result = rating / numberOfRatings
            if(result>0){
                return (<Text>Nota: {result}</Text>)
            }
    }


    const itemKeyExtractor = useCallback((item) => item._id, [])


    return(
        <SafeAreaView>
                
                <FlatList
                data={myListing}
                renderItem={({item})=>{
                    return(
                    <Pressable onPress={()=>openItem(item)}>
                        <Card marginBottom={2} rounded={40}>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Text>Valor: {item.price}</Text>
                            {rating(item.rating,item.numberOfRatings)}
                        </Card>
                    </Pressable>
                    )
                }}
                keyExtractor={itemKeyExtractor}/>

            
        </SafeAreaView>
    )
}