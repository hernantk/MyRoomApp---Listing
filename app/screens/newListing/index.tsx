import React, { useEffect, useState } from "react"
import { Alert, Text, TextInput } from "react-native"
import { ListingType } from "../../model/auth"
import { Button, Input, Select, TextArea } from 'native-base';
import useNewListing from "./hooks/useNewListing"
import { listingTypeService } from "../../services/listingType";

export const NewListing = () =>{

    const [listingType,setListingType] = useState<Array<ListingType>>()

    const  {setTitle,
            setDescription,
            setPriceText,
            setListingTypeId,
            save} = useNewListing(error => { 
                Alert.alert(error.message)
            })

    const items = () =>{
        if(listingType){
            return listingType.map(item=>{
                return(
                    <Select.Item key={item._id} label={item.name} value={item._id}/>
                )
            })
        }
        else{
            return(<></>)
        }
    }            

    useEffect(()=>{
        const load = async()=>{
            setListingType(await listingTypeService())
        }
        load()
    },[])


    return(<>
        <Input type="text" placeholder="Titulo" onChangeText={setTitle}/>
        <TextArea placeholder="Descrição" onChangeText={setDescription}/>
        <Input type="Number" placeholder="Preço" onChangeText={setPriceText}/>
        <Select
            placeholder="Escolha uma Categoria de Anuncio"
            onValueChange={(itemValue) => setListingTypeId(itemValue)}>
                {items()}
        </Select>
            

            <Button onPress={save}>Salvar</Button>
        </>

        
    )
}