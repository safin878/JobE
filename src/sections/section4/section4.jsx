import React from "react";

const Section4 = () => {
  const sections = [
    {
      img: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format",
      title: "Full-suite solutions",
      text: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      img: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format",
      title: "Simplify the complex",
      text: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    },
    {
      img: "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format",
      title: "Cutting-edge tech",
      text: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-16">
      <section className="flex justify-center gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-start max-w-md bg-base-200 p-6 border rounded-lg shadow-lg"
          >
            <img
              src={section.img}
              alt={section.title}
              className="mb-4 w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-gray-900">
              {section.title}
            </h1>
            <p className="text-gray-600 mt-2">{section.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Section4;
