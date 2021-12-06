import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_TAB, ROUTE_LISTING_DETAILS, ROUTE_LOGIN, ROUTE_NEW_LISTING } from './AppRoutes';
import TabNavigation from './TabNavigation';
import { ListingDetails } from './../screens/listingDetails/index';
import LoginScreen from './../screens/login/index';
import { NewListing } from '../screens/newListing';


const Stack = createNativeStackNavigator()

const AppNavigation = () =>{

    return(
        
        <NavigationContainer>
                <Stack.Navigator> 
                    <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} options={{headerShown:false}}/>
                    <Stack.Screen name={ROUTE_TAB} component={TabNavigation} options={{headerShown:false}}/>
                    <Stack.Screen name={ROUTE_NEW_LISTING} component={NewListing} options={{title:"Detalhes"}} />
                    <Stack.Screen name={ROUTE_LISTING_DETAILS} component={ListingDetails} options={{title:"Detalhes"}} />
                </Stack.Navigator>
            </NavigationContainer>

    )

}

export default AppNavigation