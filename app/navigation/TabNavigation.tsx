
import React from 'react';
import { ROUTE_LISTINGS, ROUTE_MY_LISTINGS } from './AppRoutes';
import { Listing } from './../screens/listing/index';
import { MyListings } from '../screens/myListings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';


const Tab = createBottomTabNavigator()


const TabNavigation = () =>{

    
       
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
                    tabBarIcon: ( { color, size }) => <Icon  color={"white"} size={size} />
                }
            } />
        </Tab.Navigator>
    )
}


export default TabNavigation