import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const banners = [
  {
    title: 'Discover Delicious Recipes',
    description: 'Explore top-rated dishes handpicked by our chefs.',
    image: 'https://i.ibb.co/356YVh4V/CS-Banner-12.jpg',
  },
  {
    title: 'Easy Meals for Busy Lives',
    description: 'Quick and tasty meals ready in 30 minutes or less.',
    image: 'https://i.ibb.co/RGTBgnDL/executive-chef-vs-head-chef-studying.jpg',
  },
  {
    title: 'Healthy & Fresh',
    description: 'Nutritious meals to power your day.',
    image: 'https://i.ibb.co/ymw67v7V/types-of-chefs-phpi-MWLQq.webp',
  },
];


const Hero = () => {
                return (
                               <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-3xl lg:mb-10 md:mb-7 mb-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-center px-4"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="bg-opacity-50 p-6 rounded-2xl text-black max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{banner.title}</h2>
                <p className="text-md md:text-lg">{banner.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
                );
};

//<a href="#slide4" className="btn btn-circle">❮</a>
//       <h1 className='text-center lg:text-6xl text-2xl'>Best Chef in Town</h1>
//       <a href="#slide2" className="btn btn-circle">❯</a>

export default Hero;