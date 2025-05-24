import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import MyRecipieCard from '../Components/MyRecipieCard';
import { AuthContext } from '../Provider/AuthProvider';

const MyRecipies = () => {
       // const newRecipe = useLoaderData()
       const newRecipe = useLoaderData()
      //  const [data, setData] = useState(newRecipe);


      const [recip, setRecipe] =useState(newRecipe)

      const {user} = use(AuthContext)
       const getRecipe = () => { 
             fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${user.email}`)
     .then((res) => res.json())
      .then((data) => { 
         console.log(data);
        setRecipe(data);
      })
       }

        
                return (
                            <div>
                                <div>
                                 <h1 className="text-center text-3xl font-bold mb-8 text-primary">
                                    My Recipes
                                 </h1>
                              </div>
                                <div className='bg-gradient-to-r from-yellow-200 via-orange to-red-200 lg:mb-10 md:mb-7 mb-5 lg:w-11/12 lg:mx-auto mx-2 rounded-3xl lg:p-4 md:p-3 p-2 space-y-3'>
                                   {recip.map(recipe => <MyRecipieCard key={recipe._id} getRecipe={getRecipe} setRecipe={setRecipe} recipeArray={recip} recipe={recipe}></MyRecipieCard>)}
                                </div>
                            </div>
                );
};

export default MyRecipies;