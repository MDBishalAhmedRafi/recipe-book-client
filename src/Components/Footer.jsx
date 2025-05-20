import React from 'react';
import footerLogo from '../assets/Capture-removebg-preview.png'
import { Link, NavLink } from 'react-router';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
const Footer = () => {
                return (
                                <div className="lg:w-11/12 lg:mx-auto mx-2">
      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
        <aside>
          <img
            className="inline-block fill-current w-[70px] h-[70px]"
            src={footerLogo}
            alt=""
          />
          <p className="font-bold">
            Food Day 24
            <br />
            Providing reliable tech since 2022
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <p className='font-bold'>Contact Us</p>
          <p className='flex items-center'><FaLocationDot size={20}/><span>154/3 Shantibagh Malibagh Dhaka-1217</span></p>
          <p className='flex items-center'><IoCall size={20}/> <span>+880 1518-371336</span></p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              to="https://www.facebook.com/profile.php?id=100078144576684"
              target="_blank"
            >
              <FaFacebook className="text-blue-600" size={25} />
            </Link>
            <Link to="https://x.com/" target="_blank">
              <FaXTwitter size={25} />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <FaLinkedin className="text-blue-600" size={25} />
            </Link>
            <Link to="https://www.youtube.com/@mdbarafi1425" target="_blank">
              <FaYoutube className="text-red-600" size={25} />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
                );
};

export default Footer;