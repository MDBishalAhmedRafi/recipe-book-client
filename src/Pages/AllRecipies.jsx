import React from "react";
import { useLoaderData } from "react-router";
import AllRecipeCard from "../Components/AllRecipeCard";

const AllRecipies = () => {
  const AllRecipies = useLoaderData();
  return (
    <div className="lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
      <h1 className="text-center text-3xl font-bold mb-8">
                All Recipe
      </h1>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
                { 
                                AllRecipies.map(recipies => <AllRecipeCard key={recipies._id} recipies={recipies}></AllRecipeCard>)
                }
      </div>
    </div>
  );
};

export default AllRecipies;
