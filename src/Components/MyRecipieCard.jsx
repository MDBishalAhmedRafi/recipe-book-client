import React, { } from "react";
import Swal from "sweetalert2";

const MyRecipieCard = ({ recipe }) => {
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

//   const [recip, setRecipe] =useState(MyRecipieCard)

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete the recipies from database 

        fetch(`http://localhost:3000/my-recipies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

               //remove the data from the UI

//                const remainingCoffee = recip.filter((reci) => reci._id !== _id);
//               console.log(remainingCoffee);
//               setRecipe(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm lg:w-11/12 lg:mx-auto mx-2 lg:mb-10 md:mb-7 mb-5">
      <figure className="lg:w-5/12 ">
        <img className="rounded-3xl" src={image} alt="Album" />
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
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRecipieCard;
