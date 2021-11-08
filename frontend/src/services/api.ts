import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://backendsixdevs.herokuapp.com/'
})
 
export default api;