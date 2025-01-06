import React from 'react';
import { FaAdn, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensilSpoon, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Component/Hooks/useCart';
import useAdmin from '../Component/Hooks/useAdmin';

const Dashboard = () => {
    // TODO: GET isAdmin value from the database
    const [isAdmin] = useAdmin()
    const [cart] = useCart()
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen  bg-orange-400">
            <ul className='menu space-y-4 p-4'>
                {
                    isAdmin?<>
                     <li>
                <NavLink to={'/dashboard/adminHome'}>
                    <FaHome></FaHome>
                    Admin Home</NavLink></li>
                    <li>   
                    <NavLink to={'/dashboard/additems'}>
                    <FaUtensilSpoon></FaUtensilSpoon>
                    add items</NavLink></li>

                    <li>   
                    <NavLink to={'/dashboard/manageitems'}>
                    <FaList></FaList>
                    Manage Items</NavLink></li>
                    <li>   
                    <NavLink to={'/dashboard/bookings'}>
                    <FaAdn></FaAdn>
                    Manage booking</NavLink></li>

                    <li>   
                    <NavLink to={'/dashboard/users'}>
                    <FaUser></FaUser> All users
                   </NavLink></li>

                   {/* shared  nav links */}
                    
                    
                    </>:<>
                    

                      
                    </>
                }

<div className="divider"></div>

<li>   
 <NavLink to={'/'}>
 <FaHome></FaHome> Home
</NavLink></li>

<li>   
 <NavLink to={'/order/salad'}>
 <FaSearch></FaSearch> Order  Menu
</NavLink></li>

<li>   
 <NavLink to={'/order/Contact'}>
 <FaEnvelope></FaEnvelope> Contact
</NavLink></li>

             



                
                  
                    
                 
            </ul>
        </div>
        {/* dashboard content */}
        <div className='flex-1 p-8'>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Dashboard;