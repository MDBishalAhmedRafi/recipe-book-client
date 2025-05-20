import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const chefs = [
  { name: 'Chef Anna', image: 'https://i.ibb.co/0y6zBKfM/images-2.jpg', recipes: 34 },
  { name: 'Chef Liam', image: 'https://i.ibb.co/DPZh39bX/images-1.jpg', recipes: 28 },
  { name: 'Chef Zoe', image: 'https://i.ibb.co/8Dvjx3Wv/istockphoto-1142230160-612x612.jpg', recipes: 41 },
  { name: 'Chef Marco', image: 'https://i.ibb.co/h1TMgr60/1715799153148.jpg', recipes: 25 },
  { name: 'Chef Olivia', image: 'https://i.ibb.co/DP7SY9CP/5f9c91fc2df3edb394de5aa2dd51e408.jpg', recipes: 38 },
  { name: 'Chef Noah', image: 'https://i.ibb.co/G38phYmS/The-Surf-Club-Restaurant-March-20252328.jpg', recipes: 30 },
];

// Autoplay plugin
function autoplayPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2500);
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

const FeaturedChefs = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 3,
        spacing: 16,
      },
      breakpoints: {
        '(max-width: 768px)': {
          slides: { perView: 1, spacing: 12 }, // 👈 Show only 1 card on mobile
        },
      },
      created: (s) => autoplayPlugin(s),
    },
    [autoplayPlugin]
  );

  return (
    <div className="py-10 px-4 bg-gray-100 rounded-3xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Featured Chefs</h2>
      <div ref={sliderRef} className="keen-slider">
        {chefs.map((chef) => (
          <div
            key={chef.name}
            className="keen-slider__slide bg-white rounded-2xl shadow-md w-full p-4 text-center text-black"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{chef.name}</h3>
            <p className="text-sm text-gray-600">{chef.recipes} Recipes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedChefs;
