import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const {registerUser,signInWithGoogle,updateUserProfile} = useAuth();


  const handleRegister = (data) => {
    console.log("After Register", data.photo[0]);
    const profileImg = data.photo[0];
    registerUser(data.email,data.password)
    .then(result=>{
        console.log(result);
        const formData = new FormData();
        formData.append('image',profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

        axios.post(image_API_URL,formData)
        .then(res =>{
            console.log('after image upload', res.data.data.url);

            // update user profile
            const userProfile = {
                displayName : data.name,
                photoURL : res.data.data.url
            }
            updateUserProfile(userProfile)
            .then( () => {
                console.log('user profile updated done ✅');
            })
            .catch( error =>{
                console.log(error);
            })
        })
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
      <h1 className="text-4xl font-bold">Create an Account</h1>
      <p className="text-gray-600 mt-1 mb-6">Register with ZapShift</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* Name */}
        <div className="mb-4">
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Name"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-lime-400"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is Required.</p>
          )}
        </div>
        {/* Photo Image Field */}
        <div className="mb-4">
          <label className="text-sm font-medium">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            placeholder="Your Photo"
            className="file-input w-full border rounded-lg  mt-1 focus:ring-2 focus:ring-lime-400"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is Required.</p>
          )}
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
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
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            })}
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-lime-400"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be at least 6 characters.
            </p>
          )}

          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must include uppercase, lowercase, number & special
              character.
            </p>
          )}
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-lime-400 hover:bg-lime-500 py-2 rounded-lg font-medium"
        >
          Register
        </button>
      </form>

      {/* Register */}
      <p className="text-sm text-gray-700 mt-4">
        Already have an account?
        <Link to="/signin" className="text-lime-500 cursor-pointer">
          Login
        </Link>
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
};

export default SignUp;
