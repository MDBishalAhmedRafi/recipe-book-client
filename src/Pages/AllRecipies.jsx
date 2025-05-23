import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllRecipeCard from "../Components/AllRecipeCard";

const CUISINE_OPTIONS = ["All", "Italian", "Mexican", "Indian", "Chinese", "Others"];

const AllRecipies = () => {
  const allRecipies = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  // Filter recipes based on selected cuisine
  const filteredRecipies =
    selectedCuisine === "All"
      ? allRecipies
      : allRecipies.filter((rec) => rec.cuisine === selectedCuisine);

  return (
    <div className="lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5  bg-gradient-to-r from-yellow-300 via-orange to-blue-200 rounded-3xl lg:p-4 md:p-3 p-2">
      <h1 className="text-center text-primary text-3xl font-bold mb-8">All Recipe</h1>

      {/* Cuisine Filter Dropdown */}
      <div className="flex justify-end mb-6">
  <select
    className="select select-bordered w-full max-w-xs"
    value={selectedCuisine}
    onChange={(e) => setSelectedCuisine(e.target.value)}
  >
    {CUISINE_OPTIONS.map((cuisine) => (
      <option key={cuisine} value={cuisine}>
        {cuisine}
      </option>
    ))}
  </select>
</div>
      {/* Recipe Cards Grid */}
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {filteredRecipies.map((recipies) => (
          <AllRecipeCard key={recipies._id} recipies={recipies} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipies;