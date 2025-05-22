import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyRecipieCard from '../Components/MyRecipieCard';

const MyRecipies = () => {
       // const newRecipe = useLoaderData()
       const newRecipe = useLoaderData()
        const [recip, setRecipe] =useState(newRecipe)
                return (
                                <div>
                                   {recip.map(recipe => <MyRecipieCard key={recipe._id} setRecipe={setRecipe} recipeArray={recip} recipe={recipe}></MyRecipieCard>)}
                                </div>
                );
};

export default MyRecipies;