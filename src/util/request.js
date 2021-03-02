import axios from 'axios'

const server=axios.create({
    baseURL: '',
    timeout:10000
})

server.interceptors.request.use(req=>{
    return req
},error => {
    return Promise.reject(error)
})

server.interceptors.response.use(res=>{
    return res
},error => {
    return Promise.reject(error)
})

export  default server