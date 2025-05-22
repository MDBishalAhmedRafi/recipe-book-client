import React from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const TopRecipeCard = ({recipe}) => {
                const {_id, image, title, cuisine, likeCount} = recipe
                return (
                                <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 border border-base-300">
      <figure className="overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/400x300?text=No+Image"}
          alt='picture'
          className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold text-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-sm text-gray-500 italic">Cuisine Type: {cuisine}</p>

        <div className="flex items-center gap-2 text-error mt-1">
          <FaHeart className="text-red-500" />
          <span className="text-sm font-semibold">{likeCount} Likes </span>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/recipe-details/${_id}`}>
          <button className="btn btn-sm btn-outline btn-primary flex items-center gap-2">
            <FaEye className="text-sm" /> View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
                );
};

export default TopRecipeCard;