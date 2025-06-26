// import React, { useState } from "react";
// import Swal from "sweetalert2";
// // import EmptyError from "./EmptyError";


// const MyRecipieCard = ({ recipe, setRecipe, recipeArray, getRecipe }) => {
//   const {
//     _id,
//     image,
//     title,
//     ingredients,
//     instructions,
//     cuisine,
//     prepTime,
//     likeCount,
//   } = recipe;
//   console.log(recipe);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [updatedRecipe, setUpdatedRecipe] = useState({
//     title,
//     ingredients,
//     instructions,
//     cuisine,
//     prepTime,
//   });

//   const handleDelete = (_id) => {
//     console.log(_id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount) {
//               Swal.fire("Deleted!", "Your file has been deleted.", "success");

//               //remove the data from the UI
//               const remainingRecipe = recipeArray.filter(
//                 (reci) => reci._id !== _id
//               );
//               console.log(remainingRecipe);
//               setRecipe(remainingRecipe);
//             }
//           });
//       }
//     });
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
//     //send the updated recipe to the database
//     fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${_id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updatedRecipe),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setIsModalOpen(false);
//         getRecipe();
//         if (data.modifiedCount) {
//           Swal.fire({
//             title: "Recipe Updated Successfully!",
//             icon: "success",
//             draggable: true,
//           });
//         }
         
        
//       });


//     fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${_id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedRecipe),
//     })
//      .then((res) => res.json())
//       .then((data) => { 
//         console.log(data);
//       })

//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedRecipe({ ...updatedRecipe, [name]: value });
//   };
 
//     //        if(recipe.length === 0) { 
//     //   return <EmptyError></EmptyError>
//     // }

//   return (
//     <>
   
//       <div className="card lg:card-side bg-base-100 shadow-sm lg:p-4 md:p-3 p-2">
  
//         <figure className="lg:w-5/12">
//           <img
//             className="rounded-2xl w-full h-full object-cover"
//             src={image}
//             alt="Recipe"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title font-bold">{title}</h2>
//           <p className="font-bold">Ingredients: {ingredients}</p>
//           <p className="font-bold">Instructions: {instructions}</p>
//           <p className="font-bold">Cuisine: {cuisine}</p>
//           <p className="font-bold">Preparation-Time: {prepTime}</p>
//           <p className="font-bold">Total Likes: {likeCount}</p>
//           <div className="card-actions justify-end">
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="btn btn-primary"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => handleDelete(_id)}
//               className="btn btn-primary"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 px-4">
//           <div className=" p-5 bg-white rounded-xl w-full max-w-sm shadow-lg">
//             <h2 className="text-lg font-semibold mb-3 text-center dark:text-gray-900">
//               Update Recipe
//             </h2>

//             <div className="mb-4">
//               <img
//                 src={image}
//                 alt="Recipe"
//                 className="w-full h-32 object-cover rounded-lg"
//               />
//             </div>

//             <form onSubmit={handleUpdateSubmit} className="space-y-3">
//               <div>
//                 <label className="label">
//                   <span className="label-text text-sm dark:text-gray-900">Title</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={updatedRecipe.title}
//                   onChange={handleInputChange}
//                   className="input input-bordered w-full text-sm"
//                   placeholder="Enter title"
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text text-sm dark:text-gray-900">Ingredients</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="ingredients"
//                   value={updatedRecipe.ingredients}
//                   onChange={handleInputChange}
//                   className="input input-bordered w-full text-sm"
//                   placeholder="Enter ingredients"
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text text-sm dark:text-gray-900">Instructions</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="instructions"
//                   value={updatedRecipe.instructions}
//                   onChange={handleInputChange}
//                   className="input input-bordered w-full text-sm"
//                   placeholder="Enter instructions"
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text text-sm dark:text-gray-900">Cuisine</span>
//                 </label>
//                 <select
//                   name="cuisine"
//                   value={updatedRecipe.cuisine}
//                   onChange={handleInputChange}
//                   className="select select-bordered w-full text-sm"
//                 >
//                   <option value="">Select Cuisine</option>
//                   <option value="Italian">Italian</option>
//                   <option value="Indian">Indian</option>
//                   <option value="Mexican">Mexican</option>
//                   <option value="Chinese">Chinese</option>
//                   <option value="Others">Others</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text text-sm dark:text-gray-900">
//                     Preparation Time (minutes)
//                   </span>
//                 </label>
//                 <input
//                   type="number"
//                   name="prepTime"
//                   value={updatedRecipe.prepTime}
//                   onChange={handleInputChange}
//                   className="input input-bordered w-full text-sm"
//                   placeholder="Enter prep time"
//                 />
//               </div>

//               <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="btn btn-sm btn-error text-white w-full sm:w-auto"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-sm btn-primary w-full sm:w-auto"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MyRecipieCard;


import React, { useState } from "react";
import Swal from "sweetalert2";

const MyRecipieCard = ({
  recipe,
  setRecipe,
  recipeArray,
  getRecipe,
  index,
}) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState({
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete your recipe.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Recipe has been deleted.", "success");
              const remaining = recipeArray.filter((r) => r._id !== _id);
              setRecipe(remaining);
            }
          });
      }
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsModalOpen(false);
        getRecipe();
        if (data.modifiedCount) {
          Swal.fire("Updated!", "Recipe updated successfully.", "success");
        }
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({ ...updatedRecipe, [name]: value });
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <img
            src={image}
            alt="recipe"
            className="w-12 h-12 object-cover rounded-md"
          />
        </td>
        <td>{title}</td>
        <td>{cuisine}</td>
        <td>{prepTime} min</td>
        <td>{likeCount}</td>
        <td className="flex flex-col gap-1 sm:flex-row sm:gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-sm btn-warning"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-error text-white"
          >
            Delete
          </button>
        </td>
      </tr>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4 text-center">Update Recipe</h2>

            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={updatedRecipe.title}
                  required
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  placeholder="Enter title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ingredients</label>
                <input
                  type="text"
                  name="ingredients"
                  value={updatedRecipe.ingredients}
                  required
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  placeholder="Enter ingredients"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Instructions</label>
                <input
                  type="text"
                  name="instructions"
                  value={updatedRecipe.instructions}
                  required
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  placeholder="Enter instructions"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Cuisine</label>
                <select
                  name="cuisine"
                  value={updatedRecipe.cuisine}
                  required
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
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
                <label className="block text-sm font-medium mb-1">Preparation Time</label>
                <input
                  type="number"
                  name="prepTime"
                  value={updatedRecipe.prepTime}
                  required
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  placeholder="Time in minutes"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-error"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
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

