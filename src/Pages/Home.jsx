import React from "react";
import Hero from "../Components/Hero";
import UserTestimonials from "../Components/UserTestiMonials";
import FeaturedChefs from "../Components/FeaturedChefs";
import { Link, useLoaderData } from "react-router";
import TopRecipeCard from "../Components/TopRecipeCard";
import { Typewriter } from 'react-simple-typewriter'; // ✅ Import here

const Home = () => {
  const recipies = useLoaderData();
  console.log(recipies);

  return (
    <div className="lg:w-11/12 lg:mx-auto mx-2">
      <Hero />
      <section className="lg:mb-10 md:mb-7 mb-5 bg-gradient-to-r from-yellow-200 via-orange to-blue-200 rounded-3xl lg:p-4 md:p-3 p-2">
        <h1 className="text-center text-3xl font-bold mb-8 text-primary">
          Our Top Recipes <br /> <span className="text-red-600">
            <Typewriter
            words={['is Italian,', 'is Maxican', 'is Indian', 'is Chinese', 'is Others']}
            loop={false}
            cursor
            cursorStyle=""
            typeSpeed={60}
            deleteSpeed={20}
            delaySpeed={2000}
          />
          </span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
          {recipies.map((recipe) => (
            <TopRecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>

        <div className="text-center lg:mt-10 md:mt-7 mt-5">
          <Link to='/all-recipies'>
            <button className="btn btn-sm btn-outline btn-primary">
              See All Recipies
            </button>
          </Link>
        </div>
      </section>

      <section className="lg:mb-10 md:mb-7 mb-5 bg-gradient-to-r from-red-200 via-orange to-blue-200 rounded-3xl">
        <UserTestimonials />
      </section>

      <section className="lg:mb-10 md:mb-7 mb-5 bg-gradient-to-r from-yellow-200 via-orange to-blue-200 rounded-3xl">
        <FeaturedChefs />
      </section>
    </div>
  );
};

export default Home;
