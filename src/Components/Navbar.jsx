import React, { use } from "react";
import { Link, NavLink } from "react-router";
import mainLogo from "../assets/Capture-removebg-preview.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.warn("User has logged out", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
        });
      })
      .catch(() => {});
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-200 via-orange to-red-100 shadow-md">
      {/* 👇 Width preserved */}
      <div className="lg:w-11/12 lg:mx-auto mx-2">
        <div className="navbar px-0">
          {/* Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/all-recipies">All Recipies</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                <li><NavLink to="/support">Support</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              </ul>
            </div>
            <Link to="/" className="text-xl">
              <img className="w-[60px] h-[60px]" src={mainLogo} alt="logo" />
            </Link>
          </div>

          {/* Center */}
          <div className="navbar-center hidden lg:flex dark:text-gray-900">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/all-recipies">All Recipies</NavLink></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><NavLink to="/contact-us">Contact Us</NavLink></li>
              <li><NavLink to="/support">Support</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </ul>
          </div>

          {/* End */}
          <div className="navbar-end gap-2">
            <ToggleTheme />
            {user?.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-9 h-9 rounded-full border border-green-400 p-[2px]"
              />
            )}
            {user ? (
              <button onClick={handleLogOut} className="btn btn-sm">Logout</button>
            ) : (
              <>
                <Link to="/login" className="btn btn-sm">Login</Link>
                <Link to="/register" className="btn btn-sm">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
