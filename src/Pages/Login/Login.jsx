import React, { useContext, useEffect, useState } from 'react';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Component/Social Login/SocialLogin';


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // Initialize captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            console.log(result.user);

            Swal.fire({
                title: 'Login Successful',
                text: 'Welcome back!',
                icon: 'success',
            });

            navigate(from, { replace: true });
        } catch (error) {
            console.error(error.message);
            Swal.fire({
                title: 'Login Failed',
                text: error.message,
                icon: 'error',
            });
        }
    };

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        setDisabled(!validateCaptcha(userCaptchaValue)); // Enable/Disable login button
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Right Side Content */}
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Experience seamless food ordering and management at your fingertips.
                    </p>
                </div>

                {/* Left Side Form */}
                <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        {/* Captcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                onBlur={handleValidateCaptcha}
                                name="captcha"
                                placeholder="Type the captcha above"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <input
                                disabled={disabled}
                                className="btn btn-primary"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                    <p className="text-center">
                        <small>
                            New Here?{' '}
                            <Link to="/signup" className="text-blue-500">
                                Create an account
                            </Link>
                        </small>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        
        </div>
    );
};

export default Login;
