import React from 'react';
import banner from '../assets/CS-Banner-12.jpg'
const AboutUs = () => {
                return (
                                <div className="bg-white lg:py-14 lg:px-6 text-gray-800 lg:w-11/12 lg:mx-auto mx-2">
      {/* Top Banner */}
      <div className="relative h-64 md:h-96">
        <img
          src={banner} // replace with your banner path
          alt="About Us Banner"
          className="w-full h-full object-cover brightness-75 rounded-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-5 px-6 lg:mt-10 md:mt-7 mt-5 rounded-2xl bg-gradient-to-r from-yellow-200 via-orange to-red-100">
        <h2 className="text-3xl font-semibold mb-4">Welcome to RecipeBook!</h2>
        <p className="text-lg text-gray-700 leading-8">
          We’re passionate about food and making it easier for everyone to find, manage, and share amazing recipes.
          Whether you're a home cook or a seasoned chef, RecipeBook gives you the tools to save, like, and explore
          thousands of delicious recipes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-orange-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-orange-700">10K+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">20K+</h3>
            <p className="text-gray-600">Recipes Shared</p>
          </div>
          <div className="bg-red-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-red-700">Top Rated</h3>
            <p className="text-gray-600">Weekly Highlights</p>
          </div>
        </div>
      </div>
    </div>
                );
};

export default AboutUs;