import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const SignIn = () => {
  const {
      register,
      handleSubmit,
       formState: { errors },
    } = useForm();
       

    const {signIn,signInWithGoogle} = useAuth();

    const handleLogin = (data) =>{
     console.log(data);
     signIn(data.email,data.password)
    .then(result=>{
        console.log(result);
    })
    .catch( error =>{
        console.log(error);
    })
    };

    const handleGoogleLogin = () =>{
      signInWithGoogle()
      .then(result =>{
        console.log(result);
      })
      .catch(error =>{
        console.log(error);
      })
    };
    return (
       <div className="w-full max-w-sm mx-auto py-10">
      <h1 className="text-4xl font-bold">Welcome Back</h1>
      <p className="text-gray-600 mt-1 mb-6">Login with ZapShift</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        
      {/* Email */}
      <div className="mb-4">
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-lime-400"
        />
        {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required.</p>
          )}
      </div>

      {/* Password */}
      <div className="mb-2">
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          {...register("password", {
              required: true,
            })}
          placeholder="Password"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-lime-400"
        />
         {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
      </div>

      {/* Forgot password */}
      <button className="text-sm text-gray-600 hover:underline mb-4">
        Forget Password?
      </button>

      {/* Login button */}
      <button type='submit' className="w-full bg-lime-400 hover:bg-lime-500 py-2 rounded-lg font-medium">
        Login
      </button>
      </form>

      {/* Register */}
      <p className="text-sm text-gray-700 mt-4">
        Don’t have any account?{" "}
        <Link to='/signup' className="text-lime-500 cursor-pointer">Register</Link>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-2 text-gray-500 my-4">
        <div className="h-px bg-gray-300 flex-1" /> Or{" "}
        <div className="h-px bg-gray-300 flex-1" />
      </div>

      {/* Google Login */}
      <button onClick={handleGoogleLogin} className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="google"
          className="w-5"
        />
        Login with Google
      </button>
    </div>
);
}

export default SignIn;