import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from '../../store/context/auth';

const createApiWithoutToken = () => { 
    let http = axios.create({ 
        baseURL: 'http://192.168.2.27:9090/'
    })
    return http
}

const createApiWithToken = () => { 

    let http = axios.create({ 
        baseURL: 'http://192.168.2.27:9090/',
        headers:{
            'Authorization': "Bearer " + '',
            'Content-Type': 'application/json'
                }
            })
    return http
}

const api = createApiWithoutToken()
const apiToken = createApiWithToken()

export default api