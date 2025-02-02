import React from "react";

const section2 = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16   ">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg  font-bold text-blue-600">
            POWERING THE FUTURE OF FINANCE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold ">
            Uncovering new <br /> ways to delight <br /> customers
          </h1>
          <p className="text-lg text-gray-700">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-lg text-gray-700">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-[40%] flex justify-center mt-10 md:mt-0">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format"
            alt="Finance Technology"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default section2;
