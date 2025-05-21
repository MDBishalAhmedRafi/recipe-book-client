import React from "react";
import Hero from "../Components/Hero";
import UserTestimonials from "../Components/UserTestiMonials";
import FeaturedChefs from "../Components/FeaturedChefs";
import { Link, useLoaderData } from "react-router";
import TopRecipeCard from "../Components/TopRecipeCard";

const Home = () => {
  const recipies = useLoaderData();
  console.log(recipies);
  return (
    <div className="lg:w-11/12 lg:mx-auto mx-2">
      <Hero></Hero>
      <section className=" lg:mb-10 md:mb-7 mb-5">
        <h1 className="text-center text-3xl font-bold mb-8">Our Top Recipies</h1>
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
            {recipies.map((recipe) => (
          <TopRecipeCard key={recipe._id} recipe={recipe}></TopRecipeCard>
        ))}
        </div>
       <div className="text-center lg:mt-10 md:mt-7 mt-5">
         <Link to='/all-recipies'><button className="btn btn-sm btn-outline btn-primary">
                     See All Recipies
                     </button></Link>
       </div>
      </section>
      <section className="lg:mb-10 md:mb-7 mb-5">
        <UserTestimonials></UserTestimonials>
      </section>
      <section className="lg:mb-10 md:mb-7 mb-5">
        <FeaturedChefs></FeaturedChefs>
      </section>
    </div>
  );
};

export default Home;
