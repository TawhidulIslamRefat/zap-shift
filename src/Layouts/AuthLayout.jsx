import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="min-h-screen flex ">
        <div className="bg-white flex-1 pt-3">
           <div className="w-9/12 mx-auto">
           <Logo></Logo>
            <div className="flex justify-center mt-30">
                <Outlet></Outlet>
            </div>
           </div>
        </div>
        <div className="bg-[#FAFDF0] flex-1">
          <div className="w-9/12 mx-auto flex justify-center mt-70">
            <img src={authImage} alt="" />
          </div>
        </div>
    </div>
  );
};

export default AuthLayout;
