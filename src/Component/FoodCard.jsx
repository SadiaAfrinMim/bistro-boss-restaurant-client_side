import React, { useContext } from 'react';
import useAuth from './Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

import useAxiosSecure from './Hooks/useAxiosSecure';
import useCart from './Hooks/useCart';


const FoodCard = ({item}) => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const [,refetch]= useCart()
    const {name, image, price, recipe,_id} = item;
    const navigate = useNavigate()
    const location = useLocation()



    const handleAddtoCard = ()=>{
      if(user && user.email){
     
        const cartItem = {
          menuId : _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:`${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch the cart to update the cart items
            refetch()
          }
        })

      }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
        //  send the user to the login page
        navigate('/login', {state:{from: location}})

          }
        })
      }
    }
   
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className='absolute bg-slate-900 rounded-lg right-0 text-white mr-4 mt-4 px-4'>${price}</p>
  <div className="card-body">
    <h2 className="card-title flex flex-col items-center ">{name}</h2>
    <p className='text-center'>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={handleAddtoCard} className="btn btn-outline bg-slate-100 border-orange-600 border-0 border-b-4 mt-4">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;