import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer/>
      <header>
                <Navbar></Navbar>
      </header>
      <main>
                <Outlet></Outlet>
      </main>
      <footer>
                <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
