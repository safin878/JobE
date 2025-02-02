import React from "react";
import "./section8.css";
import { IoIosArrowForward } from "react-icons/io";
const Section8 = () => {
  return (
    <div>
      <section className="relative bg-blue-500 text-white py-20 px-10 clip-diagonal">
        {/* Background with diagonal cut */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 "></div>

        <div className="relative z-10 max-w-2xl text-left">
          <h1 className="text-5xl font-bold mb-4">Legacy no longer</h1>
          <p className="text-lg mb-6">
            Talk to us to find out how we can transform your organisation for
            the future.
          </p>
          <button className="bg-[#ff8d58] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition duration-300 flex justify-center items-center gap-2">
            <span>Contact Us </span>
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section8;
