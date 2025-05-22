import React from 'react';
import { useLoaderData } from 'react-router';

const MyRecipies = () => {
       const newRecipe = useLoaderData()
                return (
                                <div className="card lg:card-side bg-base-100 shadow-sm lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
  <figure className='lg:w-5/12 '>
    <img className='rounded-3xl'
      src={newRecipe.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{newRecipe.title}</h2>
    <p>Ingredients: {newRecipe.ingredients}</p>
    <p>Instructions: {newRecipe.instructions}</p>
    <p>Cuisine: {newRecipe.cuisine}</p>
    <p>Preparation-Time: {newRecipe.prepTime}</p>
    {/* {newRecipe?.categories?.map((recipe, index) => (
          <p key={index}>categories: {recipe}</p>
        ))} */}
        <p>Total Likes: {newRecipe.likeCount}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Update</button>
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
                );
};

export default MyRecipies;