import { Card, FlatList, Text } from "native-base";
import React, { useCallback } from "react"
import { Pressable } from 'react-native';
import { ROUTE_LISTING_DETAILS } from "../../navigation/AppRoutes";
import { TabPaneProps } from 'semantic-ui-react';
import { useNavigation } from "@react-navigation/core";







const RenderList = ({data}) =>{
    const navigation = useNavigation<TabPaneProps>()

    const openItem = (item) => {
        navigation.navigate(ROUTE_LISTING_DETAILS, item)
    }

    const itemKeyExtractor = useCallback((item) => item._id, [])

    const rating = (rating:number,numberOfRatings:number)=>{
        let result = rating / numberOfRatings
        if(result>0){
            return (<Text>Nota: {result}</Text>)
        }
    }

    return(
        <FlatList
            data={data}
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
    )
        
}

export default RenderList