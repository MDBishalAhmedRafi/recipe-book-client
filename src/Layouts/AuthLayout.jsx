import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router';

const AuthLayout = () => {
                return (
                                 <div>
                                    <ToastContainer/>
                                            <header>
                                                <Navbar></Navbar>
                                                </header>    
                                                <main className='mt-5'>
                                                                <Outlet></Outlet>
                                                </main>
                                                <footer>
                                                                <Footer></Footer>
                                                </footer>
                                </div>
                );
};

export default AuthLayout;