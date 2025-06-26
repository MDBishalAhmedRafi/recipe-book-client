import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import Loading from "../Pages/Loading";
import { ViewModeContext } from "../Context/ViewModeContext";



const MainLayout = () => {
  
  const {state} = useNavigation()
  return (
    // <ThemeProvider>
      
      <ViewModeContext.Provider value="cards">
        <div>
      
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
      </ViewModeContext.Provider>
    // </ThemeProvider>
  );
};

export default MainLayout;
