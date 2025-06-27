// import React, { useContext, useState } from 'react';
// import { AuthContext } from "../Provider/AuthProvider";
// import { useLoaderData } from 'react-router';
// import { toast } from 'react-toastify';

// const RecipeDetails = () => {
//   const details = useLoaderData();
//   const { user } = useContext(AuthContext);

//   const [likeCount, setLikeCount] = useState(details.likeCount);
//   const [hasLiked, setHasLiked] = useState(false);

//   const handleLike = async () => {
//     if (user?.email === details.email) {
//      toast.warn("You Can't like your own recipe", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       return;
//     }

//     if (hasLiked) {
//        toast.warn("You have already liked this recipe.", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       return;
//     }

//     try {
//       const response = await fetch(`https://recipe-book-app-server-sepia.vercel.app/recipies/${details._id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });

//       const result = await response.json();
//       if (result.modifiedCount > 0) {
//         setLikeCount(prev => prev + 1);
//         setHasLiked(true);

//         // Store in localStorage
//         const likedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || [];
//         likedRecipes.push(details._id);
//         localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
//       } else {
//         console.error('No update made to the recipe.');
//       }
//     } catch (err) {
//       console.error('Failed to like recipe:', err);
//     }
//   };

//   return (
//     <div className="card lg:card-side bg-base-100 shadow-sm lg:p-4 md:p-3 p-2 lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
//       <figure className='lg:w-5/12 '>
//         <img className='rounded-3xl' src={details.image} alt="Recipe" />
//       </figure>
//       <div className="card-body">
//         <p className="text-lg font-bold dark:text-indigo-700 text-red-700">{likeCount} people interested in this recipe</p>
//         <h2 className="card-title font-bold">{details.title}</h2>
//         <p className='font-bold'>Ingredients: {details.ingredients}</p>
//         <p className='font-bold'>Instructions: {details.instructions}</p>
//         <p className='font-bold'>Cuisine: {details.cuisine}</p>
//         <p className='font-bold'>Preparation-Time: {details.prepTime}</p>
//         {details.categories.map((cate, index) => (
//           <p className='font-bold' key={index}>Categories: {cate}</p>
//         ))}
//         <div className="card-actions justify-end">
//           <button
//             onClick={handleLike}
//             className="btn btn-primary"
//             // disabled={hasLiked}
//           >
//             {hasLiked ? "Liked" : "Like"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;


// {/* <div className="mb-4">
//         <h3 className="font-semibold text-gray-700">Categories:</h3>
//         {details.categories.map((cate, index) => (
//           <p key={index} className="text-sm text-gray-600">{cate}</p>
//         ))}
//       </div> */}

// //       import React, { useState } from 'react';
// // import { useLoaderData } from 'react-router';

// // // Simulating logged-in user
// // const currentUser = {
// //   email: 'user@example.com', // Replace with actual user info from context/auth
// // };

// // const RecipeDetails = () => {
// //   const details = useLoaderData();

// //   const [likeCount, setLikeCount] = useState(details.likeCount || 0);

// //   const handleLike = () => {
// //     if (currentUser.email === details.authorEmail) {
// //       alert("You cannot like your own recipe.");
// //       return;
// //     }

// //     // Increase the like count
// //     setLikeCount((prev) => prev + 1);

// //     // Optionally: send update to server here
// //   };

// //   return (
// //     <div className="lg:w-11/12 lg:mx-auto mx-2">
// //       {/* 👇 Like summary at top */}
// //       <p className="text-lg font-semibold mt-4 mb-4 text-center text-gray-700">
// //         {likeCount} people interested in this recipe
// //       </p>

// //       <div className="card lg:card-side bg-base-100 shadow-sm mb-10">
// //         <figure className="lg:w-5/12">
// //           <img className="rounded-3xl" src={details.image} alt={details.title} />
// //         </figure>

// //         <div className="card-body">
// //           <h2 className="card-title">{details.title}</h2>
// //           <p>Ingredients: {details.ingredients}</p>
// //           <p>Instructions: {details.instructions}</p>
// //           <p>Cuisine: {details.cuisine}</p>
// //           <p>Preparation Time: {details.prepTime}</p>

// //           {details.categories.map((cate, index) => (
// //             <p key={index}>Category: {cate}</p>
// //           ))}

// //           <p>Total Likes: {likeCount}</p>

// //           <div className="card-actions justify-end">
// //             <button className="btn btn-primary" onClick={handleLike}>
// //               Like
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RecipeDetails;


import React, { use, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router"; // or react-router
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const details = useLoaderData();
  const { user } = use(AuthContext);

  const [likeCount, setLikeCount] = useState(details.likeCount || 0);
  const [hasLiked, setHasLiked] = useState(false);

  // On mount, check if user already liked this recipe (localStorage)
  useEffect(() => {
    const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
    if (likedRecipes.includes(details._id)) {
      setHasLiked(true);
    }
  }, [details._id]);

  const handleLike = async () => {
    if (user?.email === details.email) {
      toast.warn("You can't like your own recipe", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    if (hasLiked) {
      toast.warn("You have already liked this recipe.", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    try {
      const response = await fetch(
        `https://recipe-book-app-server-sepia.vercel.app/recipies/${details._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      if (result.modifiedCount > 0) {
        setLikeCount((prev) => prev + 1);
        setHasLiked(true);

        const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
        likedRecipes.push(details._id);
        localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));

        toast.success("Thank you for liking the recipe!", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
        });
      } else {
        toast.error("Failed to update likes. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
        });
      }
    } catch (err) {
      console.error("Failed to like recipe:", err);
      toast.error("Error occurred while liking.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  return (
    <div className="lg:w-11/12 lg:mx-auto overflow-x-auto my-10 p-4">
      <h1 className="text-center text-3xl font-bold mb-6 text-primary">
        Recipe Details
      </h1>

      <table className="table w-full bg-white rounded-lg shadow">
        <thead className="bg-orange-300 text-white">
          <tr>
            <th>Image</th>
            <th>Recipe Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Preparation Time</th>
            <th>Categories</th>
            <th>Likes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-20 w-20">
                  <img
                    src={details.image}
                    alt={details.title || "Recipe Image"}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-image.png";
                    }}
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </td>
            <td className="dark:text-black">{details.title}</td>
            <td className="dark:text-black">{details.cuisine}</td>
            <td className="max-w-xs whitespace-normal dark:text-black">{details.ingredients}</td>
            <td className="max-w-xs whitespace-normal dark:text-black">{details.instructions}</td>
            <td className="dark:text-black">{details.prepTime} mins</td>
            <td>
              {details.categories && details.categories.length > 0
                ? details.categories.map((cate, i) => (
                    <p key={i} className="mb-1 dark:text-black">
                      {cate}
                    </p>
                  ))
                : "N/A"}
            </td>
            <td className="dark:text-black">{likeCount}</td>
            <td>
              <button
                onClick={handleLike}
                className="btn btn-sm btn-primary"
              >
                {hasLiked ? "Liked" : "Like"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecipeDetails;



