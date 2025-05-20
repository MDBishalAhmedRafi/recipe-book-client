import React, {useState } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Import icons


const Register = () => {
  
  
  const [showPassword, setShowPassword] = useState(false); 
  
  return (
    <div className="lg:w-11/12 lg:mx-auto mx-s">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center rounded-2xl">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Register Your Account
          </h2>
          <div className="border-b border-gray-300 mt-2 mb-6 relative">
            <div className="absolute left-1/2 -bottom-[1px] transform -translate-x-1/2 w-16 h-[2px] bg-green-500" />
          </div>

          <form className="space-y-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            />
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            />
            {/* Photo URL */}
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            />

            {/* Password with Eye Toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Type Your Password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-12 text-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 "
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Google Button */}
            <div className="space-y-3">
              <button
                type="button"
                className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2"
              >
                <FcGoogle size={24} />
                Register With Google
              </button>
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition font-bold"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Do you have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
