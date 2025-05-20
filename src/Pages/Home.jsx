import React from 'react';
import Hero from '../Components/Hero';
import UserTestimonials from '../Components/UserTestiMonials';
import FeaturedChefs from '../Components/FeaturedChefs';

const Home = () => {
                return (
                                <div className='lg:w-11/12 lg:mx-auto mx-2'>
                                    <Hero></Hero> 
                                    <section className='lg:mb-10 md:mb-7 mb-5'>
                                        <UserTestimonials></UserTestimonials> 
                                        </section>   
                                    <section className='lg:mb-10 md:mb-7 mb-5'>
                                       <FeaturedChefs></FeaturedChefs>
                                        </section>   

                                </div>
                );
};

export default Home;