import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const [stats, setStats] = useState({
    totalRecipes: 0,
    totalLikes: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [recipeRes, userRes] = await Promise.all([
          fetch("https://recipe-book-app-server-sepia.vercel.app/recipies/stats"),
          fetch("https://recipe-book-app-server-sepia.vercel.app/users/count"),
        ]);

        const recipeData = await recipeRes.json();
        const userData = await userRes.json();

        setStats({
          totalRecipes: recipeData.totalRecipes,
          totalLikes: recipeData.totalLikes,
          totalUsers: userData.totalUsers,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load stats. Please try again later.");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold py-10">Loading stats...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <div className="lg:w-11/12 mx-auto p-4 mt-10">
      <h1 className="text-3xl text-center font-bold text-primary mb-10">📊 Website Statistics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-100 rounded-2xl p-6 shadow text-center"
        >
          <p className="text-5xl font-bold text-orange-500">{stats.totalRecipes}</p>
          <p className="mt-2 text-xl font-semibold text-gray-700">Total Recipes</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-orange-100 rounded-2xl p-6 shadow text-center"
        >
          <p className="text-5xl font-bold text-red-500">{stats.totalLikes}</p>
          <p className="mt-2 text-xl font-semibold text-gray-700">Total Likes</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-100 rounded-2xl p-6 shadow text-center"
        >
          <p className="text-5xl font-bold text-blue-500">{stats.totalUsers}</p>
          <p className="mt-2 text-xl font-semibold text-gray-700">Total Users</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
