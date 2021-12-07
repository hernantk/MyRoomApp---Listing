import React,{ useState, useContext } from 'react'
import { AuthContext } from '../../../../store/context/auth'
import { useNavigation } from "@react-navigation/core"
import { ROUTE_MY_LISTINGS } from '../../../../navigation/AppRoutes';
import { TabPaneProps } from 'semantic-ui-react';
import newListingService from '../../../../services/newListing';


const useNewListing = (onError: (error: Error) => void) => { 
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>()
    const [price, setPrice] = useState<number>()
    const [listingTypeId, setListingTypeId] = useState<string>('')
    
    const { authActions } = useContext(AuthContext)
    const navigation = useNavigation<TabPaneProps>();
    const save = async () => {
        
        
        try { 
            let userId = authActions.userId
            newListingService({
                title,
                description,
                price,
                listingTypeId,
                userId
            })
            navigation.navigation(ROUTE_MY_LISTINGS)

        } catch(error) {
            onError(error)
        }
    }

    return { 
        setTitle,
        setDescription,
        setPrice,
        setListingTypeId,
        save
    }
}

export default useNewListing