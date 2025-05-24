import React from 'react';
import empty from '../assets/recipeError.jpg'
const EmptyError = () => {
                return (
                                <>
                               
                                                               <div className='text-center mb-4'>
                                                                       <div className='bg-white p-2 shadow lg:w-3xs w-2/3 mx-auto lg:mx-auto lg:mt-10 mt-10 m-2 rounded-3xl'>
                                                                       <img className='lg:w-3xs w-2xs' src={empty} alt="" />
                                                                       </div>
                                                                        <div className='lg:mt-10 mt-5 space-y-2'>
                                                                        <h1 className='text-red-600 font-bold lg:text-3xl'>404 Page Not Found</h1>
                                                                        <p className='font-bold lg:text-xl'>Oops! You don not Add any Recipe Yet.</p>
                                                                        <Link to='/'><button className="btn bg-blue-600 rounded-xl font-bold text-white">Go Back Home</button></Link>
                                                                               </div>      
                                                               </div>
                                                               </>
                );
};

export default EmptyError;