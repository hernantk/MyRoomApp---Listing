import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_TAB, ROUTE_LISTING_DETAILHS, ROUTE_LOGIN } from './AppRoutes';
import TabNavigation from './TabNavigation';
import { ListingDetails } from './../screens/listingDetails/index';
import LoginScreen from './../screens/login/index';


const Stack = createNativeStackNavigator()

const AppNavigation = () =>{

    return(
        
        <NavigationContainer>
                <Stack.Navigator> 
                    <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} options={{headerShown:false}}/>
                    <Stack.Screen name={ROUTE_TAB} component={TabNavigation} options={{headerShown:false}}/>
                    <Stack.Screen name={ROUTE_LISTING_DETAILHS} component={ListingDetails} options={{title:"Detalhes"}} />
                </Stack.Navigator>
            </NavigationContainer>

    )

}

export default AppNavigation