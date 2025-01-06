import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Component/Hooks/useAxiosSecure';

import { FaTrash, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Allusers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = [],refetch} =useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users')
            return res.data;

        }
        
    })

    const handleMakeAdmin = user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

    const handleDelet=user=>{
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
            axiosSecure.delete(`/users/${user._id}`)
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
            <div className='flex justify-evenly my-4'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users:{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {users.map((user,index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>

       {
        user.role === 'admin' ? 'Admin': <button onClick={()=>handleMakeAdmin(user)} className="btn bg-orange-500"><FaUser className='text-white text-2xl font-bold'></FaUser></button>
       }
        </td>
        <td>
            
             <button onClick={()=>handleDelet(user)} className="btn bg-gray-500"><FaTrash className='text-2xl text-red-500 font-bold'></FaTrash></button>
        </td>
      </tr>)}
     
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Allusers;