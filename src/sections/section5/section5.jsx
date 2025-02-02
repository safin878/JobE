// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const slides = [
//   {
//     id: "customer-focused",
//     title: "Customer focused",
//     heading: "Purpose-built financial services",
//     description:
//       "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
//     details:
//       "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.",
//     image:
//       "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&auto=format",
//   },
//   {
//     id: "agile-adaptable",
//     title: "Agile and adaptable",
//     heading: "Agile and adaptable for growth",
//     description:
//       "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
//     details:
//       "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
//     image:
//       "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
//   },
//   {
//     id: "compliance-ready",
//     title: "Compliance ready",
//     heading: "Manage compliance with ease",
//     description:
//       "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
//     details:
//       "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
//     image:
//       "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format",
//   },
//   {
//     id: "secure-safe",
//     title: "Secure and safe",
//     heading: "Highly secure and safe",
//     description:
//       "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
//     details:
//       "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
//     image:
//       "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format",
//   },
// ];

// const AutoSlider = () => {
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex);
//   };

//   const scrollToSlide = (index) => {
//     if (swiperRef.current) {
//       swiperRef.current.slideTo(index);
//     }
//   };

//   return (
//     <div className="bg-white text-center py-12">
//       <h3 className="text-sm uppercase text-blue-600 font-bold">
//         Technology Built for You
//       </h3>
//       <h1 className="text-4xl font-bold text-gray-900 mt-2">
//         The future of finance
//       </h1>

//       {/* Headline Navigation */}
//       <div className="flex justify-center space-x-4 mt-6">
//         {slides.map((slide, index) => (
//           <button
//             key={slide.id}
//             className={`px-6 py-2 rounded-full text-lg font-medium transition ${
//               activeIndex === index
//                 ? "bg-blue-200 text-blue-800 font-semibold"
//                 : "text-blue-600 hover:text-blue-800"
//             }`}
//             onClick={() => scrollToSlide(index)}
//           >
//             {slide.title}
//           </button>
//         ))}
//       </div>

//       {/* Swiper Auto-Slider */}
//       <div className="relative overflow-hidden mt-10 p-4">
//         <Swiper
//           ref={swiperRef}
//           spaceBetween={50}
//           slidesPerView={1}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           onSlideChange={handleSlideChange}
//           modules={[Autoplay]}
//           className="max-w-5xl mx-auto"
//         >
//           {slides.map((slide) => (
//             <SwiperSlide key={slide.id}>
//               <div className="flex flex-col md:flex-row items-center gap-8 p-12 shadow-xl">
//                 <div className="md:w-1/2 text-left">
//                   <h4 className="text-blue-600 font-bold text-sm uppercase">
//                     {slide.title}
//                   </h4>
//                   <h2 className="text-3xl font-bold text-gray-900 mt-2">
//                     {slide.heading}
//                   </h2>
//                   <p className="mt-3 font-semibold">{slide.description}</p>
//                   <p className="mt-2 text-gray-600">{slide.details}</p>
//                 </div>
//                 <div className="md:w-1/2">
//                   <img
//                     src={slide.image}
//                     alt={slide.heading}
//                     className="rounded-xl shadow-lg"
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default AutoSlider;
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    id: "customer-focused",
    title: "Customer focused",
    heading: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    details:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&auto=format",
  },
  {
    id: "agile-adaptable",
    title: "Agile and adaptable",
    heading: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture.",
    details:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
  },
  {
    id: "compliance-ready",
    title: "Compliance ready",
    heading: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management.",
    details:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by AI.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format",
  },
  {
    id: "secure-safe",
    title: "Secure and safe",
    heading: "Highly secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe.",
    details:
      "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure infrastructure.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format",
  },
];

const AutoSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const scrollToSlide = (title) => {
    // Find the slide with the matching title
    const slideIndex = slides.findIndex((slide) => slide.title === title);
    if (swiperRef.current && swiperRef.current.swiper && slideIndex !== -1) {
      swiperRef.current.swiper.slideTo(slideIndex);
      setActiveIndex(slideIndex);
    }
  };

  return (
    <div className="bg-white text-center py-12">
      <h3 className="text-sm uppercase text-blue-600 font-bold">
        Technology Built for You
      </h3>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">
        The future of finance
      </h1>

      {/* 🔹 Headline Navigation (Updated for matching titles) */}
      <div className="flex justify-center space-x-4 mt-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`px-6 py-2 rounded-full text-lg font-medium transition ${
              activeIndex === index
                ? "bg-blue-200 text-blue-800 font-semibold"
                : "text-blue-600 hover:text-blue-800"
            }`}
            onClick={() => scrollToSlide(slide.title)} // Pass title to scrollToSlide
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* 🔹 Swiper Auto-Slider */}
      <div className="relative overflow-hidden mt-10 p-4">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={handleSlideChange}
          modules={[Autoplay]}
          className="max-w-5xl mx-auto"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 p-12 shadow-xl">
                <div className="md:w-1/2 text-left">
                  <h4 className="text-blue-600 font-bold text-sm uppercase">
                    {slide.title}
                  </h4>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">
                    {slide.heading}
                  </h2>
                  <p className="mt-3 font-semibold">{slide.description}</p>
                  <p className="mt-2 text-gray-600">{slide.details}</p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AutoSlider;
