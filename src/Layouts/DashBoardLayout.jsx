import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";
import { ViewModeContext } from "../Context/ViewModeContext";
import { ToastContainer } from "react-toastify";

const DashBoardLayout = () => {
  return (
   
    <ViewModeContext.Provider value="table">
       {/* <ToastContainer></ToastContainer> */}
      <div className="relative min-h-screen md:flex">
      {/* Left Side: Sidebar Component */}
      <div>
        <Sidebar></Sidebar>
      </div>
      {/* Right Side: Dashboard Dynamic Content */}
      <div className="flex-1 ">
        <div className="p-5">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
    </ViewModeContext.Provider>
  );
};

export default DashBoardLayout;
