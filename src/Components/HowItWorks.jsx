import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserPlus, FaUtensils, FaHandsHelping } from "react-icons/fa";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      icon: <FaUserPlus className="text-4xl " />,
      title: "Sign Up",
      description: "Create an account in seconds and become part of our food-sharing community.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: <FaUtensils className="text-4xl " />,
      title: "Add or Request Food",
      description: "Share your extra food or browse and request meals from others near you.",
      gradient: "from-green-400 to-blue-500",
    },
    {
      icon: <FaHandsHelping className="text-4xl " />,
      title: "Connect & Share",
      description: "We help connect donors and receivers to reduce waste and support the community.",
      gradient: "from-pink-500 to-red-400",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-200 via-orange to-red-100 rounded-2xl py-16 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-r ${step.gradient} text-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="bg-white bg-opacity-20 p-6 rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm opacity-90">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
