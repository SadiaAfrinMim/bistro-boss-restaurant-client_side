import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const{createUser,updateUserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate()
      

      const onSubmit = data => {
        console.log(data);
    
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
    
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('Profile is updated');
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        navigate('/');
                    })
                    .catch((error) => console.log('Error updating profile:', error));
            })
            .catch((error) => console.log('Error creating user:', error));
    };
    
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Bistro Boss || Sign Up</title>
            </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true } ) } placeholder= "email" name="email" className="input input-bordered" />
                {errors.email && <span className='text-red-600'>email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" {...register("name", { required: true } )} placeholder="name" name="name" className="input input-bordered" />
                {errors.name && <span className='text-red-600'>name is required</span>}
              </div>
              <div className="form-control">
    <label className="label">
        <span className="label-text">Password</span>
    </label>
    <input 
        type="password" 
        name="password" 
        {...register("password", { 
            required: true, 
            minLength: 6, 
            maxLength: 18, 
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ 
        })}  
        placeholder="password" 
        className="input input-bordered" 
    />
    {errors.password?.type === "required" && (
        <p className='text-red-600'>Password is required</p>
    )}
    {errors.password?.type === "minLength" && (
        <p className='text-red-600'>Password must be at least 6 characters</p>
    )}
    {errors.password?.type === "maxLength" && (
        <p className='text-red-600'>Password must be less than 18 characters</p>
    )}
    {errors.password?.type === "pattern" && (
        <p className='text-red-600'>
            Password must include at least two uppercase letters, one special character, one number, and one lowercase letter.
        </p>
    )}


                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn btn-primary" /> 

              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;