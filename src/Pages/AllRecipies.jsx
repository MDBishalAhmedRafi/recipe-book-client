// import React, { useState } from "react";
// import { useLoaderData } from "react-router";
// import AllRecipeCard from "../Components/AllRecipeCard";

// const CUISINE_OPTIONS = ["All", "Italian", "Mexican", "Indian", "Chinese", "Others"];

// const AllRecipies = () => {
//   const allRecipies = useLoaderData();
//   const [selectedCuisine, setSelectedCuisine] = useState("All");

//   // Filter recipes based on selected cuisine
//   const filteredRecipies =
//     selectedCuisine === "All"
//       ? allRecipies
//       : allRecipies.filter((rec) => rec.cuisine === selectedCuisine);

//   return (
//     <div className="lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5  bg-gradient-to-r from-yellow-300 via-orange to-blue-200 rounded-3xl lg:p-4 md:p-3 p-2">
//       <h1 className="text-center text-primary text-3xl font-bold mb-8">All Recipe</h1>

//       {/* Cuisine Filter Dropdown */}
//       <div className="flex justify-end mb-6">
//   <select
//     className="select select-bordered w-full max-w-xs"
//     value={selectedCuisine}
//     onChange={(e) => setSelectedCuisine(e.target.value)}
//   >
//     {CUISINE_OPTIONS.map((cuisine) => (
//       <option key={cuisine} value={cuisine}>
//         {cuisine}
//       </option>
//     ))}
//   </select>
// </div>
//       {/* Recipe Cards Grid */}
//       <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
//         {filteredRecipies.map((recipies) => (
//           <AllRecipeCard key={recipies._id} recipies={recipies} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllRecipies;

import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AllRecipeCard from "../Components/AllRecipeCard";
import { useViewMode } from "../Context/ViewModeContext";

const CUISINE_OPTIONS = ["All", "Italian", "Mexican", "Indian", "Chinese", "Others"];

const AllRecipies = () => {
  const allRecipies = useLoaderData();
  const viewMode = useViewMode(); // "cards" or "table"
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [recipes] = useState(allRecipies);
  const navigate = useNavigate();

  const filteredRecipies =
    selectedCuisine === "All"
      ? recipes
      : recipes.filter((rec) => rec.cuisine === selectedCuisine);

  if (viewMode === "table") {
    return (
      <div className="lg:w-11/12 lg:mx-auto overflow-x-auto my-10">
        <h1 className="text-center text-3xl font-bold mb-6 text-primary">All Recipes</h1>

        {/* Cuisine Filter */}
        <div className="flex justify-end mb-4">
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

        {/* Table View with Action */}
        <table className="table w-full bg-white rounded-lg shadow">
          <thead className="bg-orange-300 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Recipe Name</th>
              <th>Cuisine</th>
              <th>Likes</th>
              <th>Action</th> {/* 👈 NEW COLUMN */}
            </tr>
          </thead>
          <tbody>
            {filteredRecipies.map((recipe, index) => (
              <tr key={recipe._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={recipe.image}
                        alt={recipe.title || "Recipe Image"}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/default-image.png";
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td>{recipe.title}</td>
                <td>{recipe.cuisine}</td>
                <td>{recipe.likeCount}</td>
                <td>
                  <button
                    onClick={() => navigate(`/dashboard/recipe-details/${recipe._id}`)}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    See Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // CARD VIEW (unchanged)
  return (
    <div className="lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5 bg-gradient-to-r from-yellow-300 via-orange to-blue-200 rounded-3xl lg:p-4 md:p-3 p-2">
      <h1 className="text-center text-primary text-3xl font-bold mb-8">All Recipe</h1>

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

      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {filteredRecipies.map((recipies) => (
          <AllRecipeCard key={recipies._id} recipies={recipies} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipies;



