import axios from 'axios'

const createApiWithoutToken = () => { 
    let http = axios.create({ 
        baseURL: 'http://192.168.56.1:9090/'
    })
    return http
}


const api = createApiWithoutToken()

export default api