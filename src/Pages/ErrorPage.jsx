import React from 'react';
import errorImage from '../assets/istockphoto-1404059706-612x612.jpg'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router';
import Footer from '../Components/Footer';
const ErrorPage = () => {
                return (
                                <>
                        <Navbar></Navbar>
                                <div className='text-center mb-4'>
                                        <div className='bg-white p-2 shadow lg:w-3xs w-2/3 mx-auto lg:mx-auto lg:mt-10 mt-10 m-2 rounded-3xl'>
                                        <img className='lg:w-3xs w-2xs' src={errorImage} alt="" />
                                        </div>
                                         <div className='lg:mt-10 mt-5 space-y-2'>
                                         <h1 className='text-red-600 font-bold lg:text-3xl'>404 Page Not Found</h1>
                                         <p className='font-bold lg:text-xl'>Oops! The page you're looking for doesn't exist.</p>
                                         <Link to='/'><button className="btn bg-[#0EA106] rounded-xl font-bold text-white">Go Back Home</button></Link>
                                                </div>      
                                </div>
                                <Footer></Footer>
                                </>
                );
};

export default ErrorPage;
