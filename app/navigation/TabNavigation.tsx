
import React from 'react';
import { ROUTE_LISTINGS, ROUTE_MY_LISTINGS, ROUTE_NEW_LISTING } from './AppRoutes';
import { Listing } from '../screens/list/listing/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Icon } from 'native-base';
import { MyListings } from '../screens/list/myListings';
import { useNavigation } from '@react-navigation/core';
import { TabPaneProps } from 'semantic-ui-react';


const Tab = createBottomTabNavigator()


const TabNavigation = () =>{

    const navigation = useNavigation<TabPaneProps>()
       
    return( 
         <Tab.Navigator>
            <Tab.Screen name={ROUTE_LISTINGS} component={Listing} 
            options={
                    {
                        title: 'Anuncios',
                        tabBarIcon: ( { color, size }) => <Icon color={"white"} size={size} />
                    }
                } />
            <Tab.Screen name={ROUTE_MY_LISTINGS} component={MyListings} 
            options={
                {
                    title:"Seus Anuncios",
                    tabBarIcon: ( { color, size }) => <Icon  color={"white"} size={size} />,
                    headerRight:()=> <Button onPress={()=> navigation.navigate(ROUTE_NEW_LISTING)}>Novo Anuncio</Button>
                    
                }
            } />
        </Tab.Navigator>
    )
}


export default TabNavigation