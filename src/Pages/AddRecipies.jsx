import React, { use, useState } from "react";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const CUISINE_OPTIONS = ["Italian", "Mexican", "Indian", "Chinese", "Others"];
const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];

const AddRecipies = () => {
  const [formData, setFormData] = useState({
    image: "", // now a URL
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    prepTime: "",
    categories: [],
    likeCount: 0,
    email: "", 
  });

  const {user} =use(AuthContext);
  // const userEmail = user?.email;

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "categories") {
      const updatedCategories = checked
        ? [...formData.categories, value]
        : formData.categories.filter((cat) => cat !== value);
      setFormData({ ...formData, categories: updatedCategories });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = user?.email
      const recipeWithEmail = {
    ...formData,
    email: userEmail,
  };
    console.log("Recipe Submitted:", formData);
    setFormData({
      image: "",
      title: "",
      ingredients: "",
      instructions: "",
      cuisine: "",
      prepTime: "",
      categories: [],
      likeCount: 0,
      email: "",
    });
    fetch('https://recipe-book-app-server-sepia.vercel.app/recipies', { 
      method: 'POST',
      headers: { 
            'content-type': 'application/json'
      },
      body: JSON.stringify(recipeWithEmail)
    })
    .then(res => res.json())
    .then(data => { 
      if(data.insertedId) { 
        Swal.fire({
  title: "Recipe Successfully Added!",
  icon: "success",
  draggable: true
});
      }
    })
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-200 via-orange to-yellow-200 lg:mb-10 md:mb-7 mb-5 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 justify-center">
        <FaUtensils /> Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image URL */}
        <div>
          <label className="label font-bold text-black">Photo URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://example.com/photo.jpg"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="label font-bold text-black">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Delicious Pasta"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="label font-bold text-black">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="List ingredients here..."
            required
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="label font-bold text-black">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Describe how to cook..."
            required
          />
        </div>

        {/* Cuisine Dropdown */}
        <div>
          <label className="label font-bold text-black">Cuisine Type</label>
          <select
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>Select cuisine</option>
            {CUISINE_OPTIONS.map((cuisine) => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="label font-bold text-black">Preparation Time (minutes)</label>
          <input
            type="number"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="e.g., 30"
            required
          />
        </div>

        {/* Categories */}
        <div>
          <label className="label font-bold text-black">Categories</label>
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map((cat) => (
              <label key={cat} className="label cursor-pointer font-semibold text-black">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  checked={formData.categories.includes(cat)}
                  onChange={handleChange}
                  
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Like Count */}
        <div>
          <label className="label font-bold text-black">Like Count</label>
          <input
            type="number"
            name="likeCount"
            value={formData.likeCount}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipies;