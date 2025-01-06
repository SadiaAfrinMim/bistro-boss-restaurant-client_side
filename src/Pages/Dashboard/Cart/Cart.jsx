import React from 'react';
import useCart from '../../../Component/Hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Component/Hooks/useAxiosSecure';

const Cart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)
    console.log(cart)

    const axiosSecure = useAxiosSecure()

    const handleDelet =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //  
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    refetch()
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                }
            })
            }
          });

    }
    return (
        <div>
            <div className='flex  justify-evenly mb-8'>
            <h2 className='text-4xl'>Items:{cart.length}</h2>
            <h2 className='text-4xl'>Total Price:{totalPrice}</h2>
            <button className='btn btn-primary'>pay</button>
            </div>

            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        cart.map((item,index)=>  <tr key={item._id} >
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
              {item.name}
              
            </td>
            <td>${item.price}</td>
            <th>
              <button onClick={()=>handleDelet(item._id)} className="btn btn-ghost btn-xs"><FaTrash className='text-3xl text-red-500 font-bold'></FaTrash></button>
            </th>
          </tr>)
     }
    
     
    </tbody>
   
  </table>
</div>

        </div>
    );
};

export default Cart;