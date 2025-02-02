import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./section1.css";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-blue-500 clip-parent sm:clip-parent-sm md:clip-parent-md lg:clip-parent-lg overflow-hidden h-screen">
      {/* Left Side (Blue Background) */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="p-8 md:p-12 lg:p-16 text-white">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Embrace the <br /> future of finance
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation
          </p>
          <button className="bg-[#ff8d58] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition duration-300 flex justify-center items-center gap-2">
            <span>Reach Out Us</span>
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="relative w-full md:w-1/2 clip-image sm:clip-image-sm md:clip-image-md lg:clip-image-lg">
        <img
          src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=960&auto=format"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Section1;
