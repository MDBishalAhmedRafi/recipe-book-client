import React, { useState, use } from "react";
import { AiOutlineBars, AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import mainLogo from '../assets/Capture-removebg-preview.png'


const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { user, logOut } = use(AuthContext);

  const handleToggle = () => {
    setActive(!isActive);
  };

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

  const navItemStyle = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-orange-200 dark:text-black ${
      isActive ? "bg-orange-300 font-semibold" : ""
    }`;

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div className="p-4">
          <Link to="/">
            <img
              src={mainLogo}
              width="100"
              height="100"
            />
          </Link>
        </div>
        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isActive ? "block" : "hidden"
        } md:block bg-orange-50 w-64 min-h-screen p-5 border-r relative`}
      >
        <nav className="space-y-2">
                    <NavLink to="/" className={navItemStyle}>
             Back to Home
          </NavLink>
          <NavLink to="/dashboard" className={navItemStyle}>
             Dashboard
          </NavLink>
          <NavLink to="/dashboard/add-recipies" className={navItemStyle}>
             Add Recipies
          </NavLink>
          <NavLink
            to={`/dashboard/my-recipies/${user?.email}`}
            className={navItemStyle}
          >
             My Recipies
          </NavLink>
          <NavLink to="/dashboard/all-recipies" className={navItemStyle}>All-Recipies</NavLink>
        </nav>
        {/* Logout Button */}
        <div className="mt-8 border-t pt-4 lg:absolute lg:top-120">
          <button
            onClick={handleLogOut}
            className="w-full flex items-center gap-2 px-4 py-2 rounded bg-red-100 hover:bg-red-200 text-red-700 font-medium"
          >
            <AiOutlineLogout className="text-xl" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
