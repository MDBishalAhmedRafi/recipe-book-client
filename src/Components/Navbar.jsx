import React, { use } from "react";
import { Link, NavLink } from "react-router";
import mainLogo from "../assets/Capture-removebg-preview.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // const handleDeleteToast = () => {
        toast.warn("User have Loged Out", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // }
      })
      .catch(() => {});
  };
  return (
    <div className="lg:w-11/12 lg:mx-auto mx-2">
      <div className="navbar shadow-sm mb-5">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-recipies">All-Recipies</NavLink>
              </li>
              <li>
                <NavLink to="/add-recipies">Add-Recipies</NavLink>
              </li>
              <li>
                <NavLink to="/my-recipies">My-Recipies</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl cursor-pointer">
            <img className="w-[70px] h-[70px]" src={mainLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-recipies">All-Recipies</NavLink>
            </li>
            <li>
              <NavLink to="/add-recipies">Add-Recipies</NavLink>
            </li>
            <li>
              <NavLink to="/my-recipies">My-Recipies</NavLink>
            </li>
            {user ? <li><NavLink to="/recipe-details">Recipe-Details</NavLink></li> : ""}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {/* <p>{user && user.email}</p> */}
            <img
              className="bg-green-200 rounded-full p-1"
              src={user && user.photoURL}
              alt=""
            />
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
          {user ? (
            ""
          ) : (
            <Link to="/register" className="btn">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
