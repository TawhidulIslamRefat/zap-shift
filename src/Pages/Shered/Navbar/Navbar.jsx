import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { Link, NavLink } from "react-router";
import Arrow from "../../../Components/Arrow/Arrow";

const Navbar = () => {
  const links = <>
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/coverage">Coverage</NavLink></li>
    <li><NavLink to="/about-us">About Us</NavLink></li>
    <li><NavLink to="/pricing">Pricing</NavLink></li>
    <li><NavLink to="/rider">Be a Rider</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar bg-white shadow-sm  my-3 rounded-2xl py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><Logo></Logo></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-[#606060] text-[16px]">
           {links}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link className=" text-xl font-bold text-secondary py-3 px-6 outline outline-[#DADADA] rounded-xl">Sign In</Link>
          <Link className="text-xl font-bold bg-primary py-3 px-6 rounded-xl ">Sign Up</Link>
          <div className="-ms-2">
            <Arrow ></Arrow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
