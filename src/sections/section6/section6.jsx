import React, { useEffect, useState } from "react";

const StatsSection = () => {
  // Target values for counters
  const targetNumbers = {
    experience: 20,
    institutions: 40,
    customers: 200,
  };

  // State for animated numbers
  const [experience, setExperience] = useState(0);
  const [institutions, setInstitutions] = useState(0);
  const [customers, setCustomers] = useState(0);

  // Counter animation logic
  useEffect(() => {
    const animateCounter = (setter, target, speed) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 50); // Increment based on target value
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setter(count);
      }, speed);
    };

    animateCounter(setExperience, targetNumbers.experience, 50);
    animateCounter(setInstitutions, targetNumbers.institutions, 40);
    animateCounter(setCustomers, targetNumbers.customers, 30);
  }, []);

  return (
    <section className="flex flex-col items-center text-center py-12 px-4  ">
      <h2 className="text-blue-500 text-lg font-semibold mb-6">
        TRUSTED BY THE BEST
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Years of Experience */}
        <div className="text-center">
          <h1 className="text-[100px]  font-bold text-[#156cd2]">
            {" "}
            {">"}
            {experience}
            {"+"}
          </h1>
          <p className="text-gray-900 mt-2 text-lg">Years of Experience</p>
        </div>

        {/* Financial Institutions */}
        <div className="text-center">
          <h1 className="text-[100px] font-bold text-[#156cd2]">
            {institutions}
            {"+"}
          </h1>
          <p className="text-gray-900 mt-2 text-lg">Financial Institutions</p>
        </div>

        {/* Customers */}
        <div className="text-center">
          <h1 className="text-[100px]  font-bold text-[#156cd2]">
            {">"}
            {customers}m
          </h1>
          <p className="text-gray-900 mt-2 text-lg">Customers Each</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
