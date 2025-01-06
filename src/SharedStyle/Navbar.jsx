import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'
import { FaShoppingCart } from 'react-icons/fa';

import useCart from '../Component/Hooks/useCart';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const [cart,refetch] = useCart()
  useEffect(()=>{
    refetch(user?.email)
    console.log('navbar',user?.email)
  },[user?.email])
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  console.log(cart)
  const navOption = 
    <>
     <li><Link to={'/'}>Home</Link></li>
     <li><Link to={'/menu'}>Our Menu</Link></li>
     <li><Link to={'/order/salad'}>Order Food</Link></li>
    
    
     <li><Link to={'/signup'}>Sign UP</Link></li>
     <li><Link to={'/dashboard/cart'}>
     <button className="flex items-center justify-center">
 <FaShoppingCart className='mr-2'></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length}</div>
</button></Link></li>
     {
      user? <>
      
      <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button>
      </>:<>
      <li><Link to={'/login'}>Login</Link></li>
      </>
     }
      
    
    </>
  
    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BistoBoss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;