import React, { useContext, useState } from 'react';
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const RecipeDetal = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);

  const [likeCount, setLikeCount] = useState(details.likeCount);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = async () => {
    if (user?.email === details.email) {
     toast.warn("You Can't like your own recipe", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      return;
    }

    if (hasLiked) {
       toast.warn("You have already liked this recipe.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      return;
    }

    try {
      const response = await fetch(`https://recipe-book-app-server-sepia.vercel.app/recipies/${details._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();
      if (result.modifiedCount > 0) {
        setLikeCount(prev => prev + 1);
        setHasLiked(true);

        // Store in localStorage
        const likedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || [];
        likedRecipes.push(details._id);
        localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
      } else {
        console.error('No update made to the recipe.');
      }
    } catch (err) {
      console.error('Failed to like recipe:', err);
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm lg:p-4 md:p-3 p-2 lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
      <figure className='lg:w-5/12 '>
        <img className='rounded-3xl' src={details.image} alt="Recipe" />
      </figure>
      <div className="card-body">
        <p className="text-lg font-bold dark:text-indigo-700 text-red-700">{likeCount} people interested in this recipe</p>
        <h2 className="card-title font-bold">{details.title}</h2>
        <p className='font-bold'>Ingredients: {details.ingredients}</p>
        <p className='font-bold'>Instructions: {details.instructions}</p>
        <p className='font-bold'>Cuisine: {details.cuisine}</p>
        <p className='font-bold'>Preparation-Time: {details.prepTime}</p>
        {details.categories.map((cate, index) => (
          <p className='font-bold' key={index}>Categories: {cate}</p>
        ))}
        <div className="card-actions justify-end">
          <button
            onClick={handleLike}
            className="btn btn-primary"
            // disabled={hasLiked}
          >
            {hasLiked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetal;


{/* <div className="mb-4">
        <h3 className="font-semibold text-gray-700">Categories:</h3>
        {details.categories.map((cate, index) => (
          <p key={index} className="text-sm text-gray-600">{cate}</p>
        ))}
      </div> */}

//       import React, { useState } from 'react';
// import { useLoaderData } from 'react-router';

// // Simulating logged-in user
// const currentUser = {
//   email: 'user@example.com', // Replace with actual user info from context/auth
// };

// const RecipeDetails = () => {
//   const details = useLoaderData();

//   const [likeCount, setLikeCount] = useState(details.likeCount || 0);

//   const handleLike = () => {
//     if (currentUser.email === details.authorEmail) {
//       alert("You cannot like your own recipe.");
//       return;
//     }

//     // Increase the like count
//     setLikeCount((prev) => prev + 1);

//     // Optionally: send update to server here
//   };

//   return (
//     <div className="lg:w-11/12 lg:mx-auto mx-2">
//       {/* 👇 Like summary at top */}
//       <p className="text-lg font-semibold mt-4 mb-4 text-center text-gray-700">
//         {likeCount} people interested in this recipe
//       </p>

//       <div className="card lg:card-side bg-base-100 shadow-sm mb-10">
//         <figure className="lg:w-5/12">
//           <img className="rounded-3xl" src={details.image} alt={details.title} />
//         </figure>

//         <div className="card-body">
//           <h2 className="card-title">{details.title}</h2>
//           <p>Ingredients: {details.ingredients}</p>
//           <p>Instructions: {details.instructions}</p>
//           <p>Cuisine: {details.cuisine}</p>
//           <p>Preparation Time: {details.prepTime}</p>

//           {details.categories.map((cate, index) => (
//             <p key={index}>Category: {cate}</p>
//           ))}

//           <p>Total Likes: {likeCount}</p>

//           <div className="card-actions justify-end">
//             <button className="btn btn-primary" onClick={handleLike}>
//               Like
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;