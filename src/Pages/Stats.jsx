import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Provider/AuthProvider";
import { FaHeart, FaUserAlt, FaUtensils } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

const Stats = () => {
  const { user } = useContext(AuthContext);

  const [statsData, setStatsData] = useState({
    totalRecipes: 0,
    userRecipesCount: 0,
    totalUsers: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [firebaseUserCount, setFirebaseUserCount] = useState(0);

useEffect(() => {
  fetch("https://your-api.com/firebase-users-count")
    .then(res => res.json())
    .then(data => setFirebaseUserCount(data.totalFirebaseUsers))
    .catch(err => console.error(err));
}, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchStats = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://recipe-book-app-server-sepia.vercel.app/stats?email=${user?.email}`
        );
        if (!res.ok) {
          throw new Error("Failed to load stats");
        }
        const data = await res.json();
        setStatsData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchStats();
    }
  }, [user?.email]);

  const loggedInUser = {
    name: user?.displayName || "Unknown User",
    email: user?.email || "No Email",
    photo: user?.photoURL || "https://i.pravatar.cc/150?img=10",
  };

  const stats = [
    {
      title: "Total Foods",
      value: statsData.totalRecipes,
      icon: <FaUtensils className="text-3xl" />,
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Your Added Foods",
      value: statsData.userRecipesCount,
      icon: <FaHeart className="text-3xl" />,
      gradient: "from-pink-500 to-rose-400",
    },
    {
      title: "Total Users",
      value: statsData.totalUsers,
      icon: <FaUserAlt className="text-3xl" />,
      gradient: "from-indigo-400 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-orange to-yellow-200 rounded-2xl py-10 px-4 md:px-20">
      {/* Logged-in User Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:gap-6 gap-4 mb-10 text-center sm:text-left"
      >
        <img
          src={loggedInUser.photo}
          alt="user"
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{loggedInUser.name}</h2>
          <p className="text-sm text-gray-600">{loggedInUser.email}</p>
        </div>
      </motion.div>

      {/* Status Check */}
      {loading ? (
        <div className="flex justify-center mt-10">
          <ImSpinner9 className="animate-spin text-5xl text-blue-600" />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 font-semibold mt-10">
          {error || "Failed to load stats. Please try again later."}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${stat.gradient} text-white p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium">{stat.title}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stats;
