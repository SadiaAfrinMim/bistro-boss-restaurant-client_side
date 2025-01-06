import React from 'react';
import useAdmin from '../../Component/Hooks/useAdmin';
import useAuth from '../../Component/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [user,loading] = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading||isAdminLoading){
        return <progress className='progress w-56'></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};


export default AdminRoute;