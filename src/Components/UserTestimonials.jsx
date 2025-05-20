import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Emily R.',
    review: 'This app has changed how I cook! So many creative recipes and easy to follow.',
    avatar: 'https://i.ibb.co/mdNmYLs/BARRISTER-RABIYA-J-FIROZ.jpg',
  },
  {
    name: 'David K.',
    review: 'I love how I can save my favorite dishes. Great for planning weekly meals!',
    avatar: 'https://i.ibb.co/s9T3xrFR/four.jpg',
  },
  {
    name: 'Sophia L.',
    review: 'The top recipes are always amazing. I’ve discovered so many new favorites.',
    avatar: 'https://i.ibb.co/V0ZwCLQK/ADVOCATE-AFRIN-JAHAN-KHAN.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const UserTestimonials = () => {
  return (
    <div className="bg-white py-12 px-4 rounded-3xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">What Our Users Say</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((user, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-2xl shadow p-6 text-center hover:shadow-md transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-3">"{user.review}"</p>
            <p className="font-semibold text-gray-800">{user.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonials;
