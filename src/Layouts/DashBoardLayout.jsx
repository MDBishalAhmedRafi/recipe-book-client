import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";
import { ViewModeContext } from "../Context/ViewModeContext";

const DashBoardLayout = () => {
  return (
    <ViewModeContext.Provider value="table">
      <div className="relative min-h-screen">
        <Sidebar />
        <div className="md:ml-64"> {/* Push content right only on md+ */}
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default DashBoardLayout;
