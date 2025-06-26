// import React, { use, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import MyRecipieCard from '../Components/MyRecipieCard';
// import { AuthContext } from '../Provider/AuthProvider';
// import EmptyError from '../Components/EmptyError'

// const MyRecipies = () => {
//        // const newRecipe = useLoaderData()
//        const newRecipe = useLoaderData()
//       //  const [data, setData] = useState(newRecipe);


//       const [recip, setRecipe] =useState(newRecipe)

//       const {user} = use(AuthContext)
//        const getRecipe = () => { 
//              fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${user.email}`)
//      .then((res) => res.json())
//       .then((data) => { 
//          console.log(data);
//         setRecipe(data);
//       })
//        }


        
//                 return (
//                             <div>
//                                 <div>
//                                  <h1 className="text-center text-3xl font-bold mb-8 text-primary">
//                                     My Recipes
//                                  </h1>
//                               </div>

                              
//                                { 
//                                  recip.length <= 0 ? <EmptyError></EmptyError>  : 
//                                   <div className='bg-gradient-to-r from-yellow-200 via-orange to-red-200 lg:mb-10 md:mb-7 mb-5 lg:w-11/12 lg:mx-auto mx-2 rounded-3xl lg:p-4 md:p-3 p-2 space-y-3'>
//                                    {recip.map(recipe => <MyRecipieCard key={recipe._id} getRecipe={getRecipe} setRecipe={setRecipe} recipeArray={recip} recipe={recipe}></MyRecipieCard>)}
//                                 </div>
//                                }
//                             </div>
//                 );
// };

// export default MyRecipies;

import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import EmptyError from '../Components/EmptyError';
import MyRecipieCard from '../Components/MyRecipieCard';
import { AuthContext } from '../Provider/AuthProvider';

const MyRecipies = () => {
  const loadedRecipes = useLoaderData();
  const [recipes, setRecipes] = useState(loadedRecipes);
  const { user } = use(AuthContext);

  const getRecipe = () => {
    fetch(`https://recipe-book-app-server-sepia.vercel.app/my-recipies/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  };

  if (!recipes.length) {
    return <EmptyError />;
  }

  return (
    <div className="my-10 overflow-x-auto  rounded-3xl p-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-primary">My Recipes</h1>

      <table className="table w-full bg-white rounded-lg shadow text-center">
        <thead className="bg-orange-400 text-white text-[15px]">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Cuisine</th>
            <th>Prep Time</th>
            <th>Likes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <MyRecipieCard
              key={recipe._id}
              recipe={recipe}
              recipeArray={recipes}
              setRecipe={setRecipes}
              getRecipe={getRecipe}
              index={index}
              isTableView={true}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecipies;
