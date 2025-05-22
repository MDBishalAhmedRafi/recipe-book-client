import React from 'react';
import { useLoaderData } from 'react-router';
import MyRecipieCard from '../Components/MyRecipieCard';

const MyRecipies = () => {
       // const newRecipe = useLoaderData()
       const newRecipe = useLoaderData()
                return (
                                <div>
                                   {newRecipe.map(recipe => <MyRecipieCard key={recipe._id} recipe={recipe}></MyRecipieCard>)}
                                </div>
                );
};

export default MyRecipies;