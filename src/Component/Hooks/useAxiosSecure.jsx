import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    // request interceptor to add authorization header forevery sequre
    const {logOut} = useAuth()
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
console.log('request stopped by interceptors',token)
config.headers.authorization = `Bearer ${token}`

    },function(error){
        return Promise.reject(error)
    }
)

// intercepts 401 and 403 status 
axiosSecure.interceptors.response.use(function(response){
    return response
},async(error)=>{
    const status = error?.response?.status
    console.log('status error in the interceptor',error)
    await logOut()
    if(status === 401 || status === 403){
        navigate('/login')
    }

    return Promise.reject(error)
    
})
    
    return axiosSecure
    
};

export default useAxiosSecure;