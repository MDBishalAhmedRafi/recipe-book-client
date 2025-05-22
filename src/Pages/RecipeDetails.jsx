import React from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
                const details = useLoaderData()
                return (
<div className="card lg:card-side bg-base-100 shadow-sm lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
  <figure className='lg:w-5/12 '>
    <img className='rounded-3xl'
      src={details.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{details.title}</h2>
    <p>Ingredients: {details.ingredients}</p>
    <p>Instructions: {details.instructions}</p>
    <p>Cuisine: {details.cuisine}</p>
    <p>Preparation-Time: {details.prepTime}</p>
    {details.categories.map((cate, index) => (
          <p key={index}>categories: {cate}</p>
        ))}
        <p>Total Likes: {details.likeCount}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Like</button>
    </div>
  </div>
</div>

                );
};

export default RecipeDetails;

{/* <div className="mb-4">
        <h3 className="font-semibold text-gray-700">Categories:</h3>
        {details.categories.map((cate, index) => (
          <p key={index} className="text-sm text-gray-600">{cate}</p>
        ))}
      </div> */}