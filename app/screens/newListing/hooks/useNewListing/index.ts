import React,{ useState, useContext } from 'react'
import { AuthContext } from '../../../../store/context/auth'
import { useNavigation } from "@react-navigation/core"
import { ROUTE_MY_LISTINGS, ROUTE_TAB } from '../../../../navigation/AppRoutes';
import { TabPaneProps } from 'semantic-ui-react';
import newListingService from '../../../../services/newListing';


const useNewListing = (onError: (error: Error) => void) => { 
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>()
    const [priceText, setPriceText] = useState<string>()
    const [listingTypeId, setListingTypeId] = useState<string>('')
    
    const { authState } = useContext(AuthContext)
    const navigation = useNavigation<TabPaneProps>();
    const save = async () => {
        
        
        try { 
            let userId = authState.userId
            let price = parseInt(priceText)
            newListingService({
                title,
                description,
                price,
                listingTypeId,
                userId
            })
            let reset = true
            navigation.navigate(ROUTE_MY_LISTINGS,reset)

        } catch(error) {
            onError(error)
        }
    }

    return { 
        setTitle,
        setDescription,
        setPriceText,
        setListingTypeId,
        save
    }
}

export default useNewListing