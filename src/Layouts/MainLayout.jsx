import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import Loading from "../Pages/Loading";


const MainLayout = () => {
  
  const {state} = useNavigation()
  return (
    // <ThemeProvider>
      
      <div>
      <ToastContainer/>
      <header>
                <Navbar></Navbar>
      </header>
      <main>
                {state == "loading" ? <Loading/> : <Outlet></Outlet>} 
      </main>
      <footer>
                <Footer></Footer>
      </footer>
    </div>
    // </ThemeProvider>
  );
};

export default MainLayout;
