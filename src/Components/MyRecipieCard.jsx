import React from 'react';

const MyRecipieCard = ({recipe}) => {
                const {image, title, ingredients, instructions, cuisine, prepTime, likeCount,} = recipe;
                return (
                                <div className="card lg:card-side bg-base-100 shadow-sm lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
  <figure className='lg:w-5/12 '>
    <img className='rounded-3xl'
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Ingredients: {ingredients}</p>
    <p>Instructions: {instructions}</p>
    <p>Cuisine: {cuisine}</p>
    <p>Preparation-Time: {prepTime}</p>
    {/* {newRecipe?.categories?.map((recipe, index) => (
          <p key={index}>categories: {recipe}</p>
        ))} */}
        <p>Total Likes: {likeCount}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Update</button>
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
                );
};

export default MyRecipieCard;