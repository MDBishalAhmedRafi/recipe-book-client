import React, { useState } from "react";
import Swal from "sweetalert2";

const MyRecipieCard = ({ recipe, setRecipe, recipeArray }) => {
  const {
    _id,
    image,
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
    likeCount,
  } = recipe;
  console.log(recipe);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState({
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
  });

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-recipies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              //remove the data from the UI
              const remainingRecipe = recipeArray.filter(
                (reci) => reci._id !== _id
              );
              console.log(remainingRecipe);
              setRecipe(remainingRecipe);
            }
          });
      }
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    //send the updated recipe to the database
    fetch(`http://localhost:3000/my-recipies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsModalOpen(false);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Recipe Successfully Updated!",
            icon: "success",
            draggable: true,
          });
        }
      });

    // fetch(`http://localhost:3000/my-recipies/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updatedRecipe),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       Swal.fire("Updated!", "Your recipe has been updated.", "success");
    //       setIsModalOpen(false);
    //     }
    //   });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({ ...updatedRecipe, [name]: value });
  };

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
        <figure className="lg:w-5/12">
          <img
            className="rounded-3xl w-full h-full object-cover"
            src={image}
            alt="Recipe"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Ingredients: {ingredients}</p>
          <p>Instructions: {instructions}</p>
          <p>Cuisine: {cuisine}</p>
          <p>Preparation-Time: {prepTime}</p>
          <p>Total Likes: {likeCount}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 px-4">
          <div className="bg-white p-5 rounded-xl w-full max-w-sm shadow-lg">
            <h2 className="text-lg font-semibold mb-3 text-center">
              Update Recipe
            </h2>

            <div className="mb-4">
              <img
                src={image}
                alt="Recipe"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <div>
                <label className="label">
                  <span className="label-text text-sm">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={updatedRecipe.title}
                  onChange={handleInputChange}
                  className="input input-bordered w-full text-sm"
                  placeholder="Enter title"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-sm">Ingredients</span>
                </label>
                <input
                  type="text"
                  name="ingredients"
                  value={updatedRecipe.ingredients}
                  onChange={handleInputChange}
                  className="input input-bordered w-full text-sm"
                  placeholder="Enter ingredients"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-sm">Instructions</span>
                </label>
                <input
                  type="text"
                  name="instructions"
                  value={updatedRecipe.instructions}
                  onChange={handleInputChange}
                  className="input input-bordered w-full text-sm"
                  placeholder="Enter instructions"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-sm">Cuisine</span>
                </label>
                <select
                  name="cuisine"
                  value={updatedRecipe.cuisine}
                  onChange={handleInputChange}
                  className="select select-bordered w-full text-sm"
                >
                  <option value="">Select Cuisine</option>
                  <option value="Italian">Italian</option>
                  <option value="Indian">Indian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-sm">
                    Preparation Time (minutes)
                  </span>
                </label>
                <input
                  type="number"
                  name="prepTime"
                  value={updatedRecipe.prepTime}
                  onChange={handleInputChange}
                  className="input input-bordered w-full text-sm"
                  placeholder="Enter prep time"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-sm btn-error text-white w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-primary w-full sm:w-auto"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyRecipieCard;

// const [recip, setRecipe] =useState(MyRecipieCard)

//  const remainingCoffee = recip.filter((reci) => reci._id !== _id);
// console.log(remainingCoffee);
// setRecipe(remainingCoffee);
