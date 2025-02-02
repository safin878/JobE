import React, { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setIsAtTop(currentScrollY === 0); // Check if at top
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isAtTop
            ? "lg:bg-transparent" // Transparent background when at the top
            : "lg:bg-white shadow-2xl" // Base background with shadow when scrolled down
        }
        lg:bg-transparent lg:shadow-none bg-blue-400`}
      >
        <div className="flex items-center justify-between p-4 container mx-auto">
          {/* Logo Section */}
          <div
            className={`font-bold text-xl ${
              isAtTop ? "lg:text-white" : "lg:text-blue-400"
            }`}
          >
            <img
              src={
                isAtTop
                  ? "https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format" // Logo when at top or scrolling up
                  : "https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format" // Logo when scrolled down
              }
              alt="Logo"
              className="transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <a
                href="#"
                className={`relative group text-white ${
                  isAtTop ? "lg:text-white" : "lg:text-blue-400"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  Solutions
                  <IoIosArrowDown />
                </div>
                <span
                  className={`absolute left-0 w-full h-0.5 ${
                    isAtTop ? "bg-white" : "bg-blue-500"
                  } transition-all duration-300 mt-1 scale-x-0 group-hover:scale-x-100 bottom-0`}
                ></span>
              </a>
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 p-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    AnyCaaS
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    AnyBaaS
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    AnyPaaS
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className={`relative group text-white ${
                isAtTop ? "lg:text-white" : "lg:text-blue-400"
              }`}
            >
              Services
              <span
                className={`absolute left-0 w-full h-0.5 ${
                  isAtTop ? "bg-white" : "bg-blue-500"
                } transition-all duration-300 mt-1 scale-x-0 group-hover:scale-x-100 bottom-0`}
              ></span>
            </a>
            <a
              href="#"
              className={`relative group text-white ${
                isAtTop ? "lg:text-white" : "lg:text-blue-400"
              }`}
            >
              About Us
              <span
                className={`absolute left-0 w-full h-0.5 ${
                  isAtTop ? "bg-white" : "bg-blue-500"
                } transition-all duration-300 mt-1 scale-x-0 group-hover:scale-x-100 bottom-0`}
              ></span>
            </a>

            <div className="relative ">
              <div className="flex items-center bg-white text-blue-500 px-4 py-2 rounded-md border border-gray-300  ">
                <MdLanguage className="mr-2 text-xl" /> {/* Language Icon */}
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="bg-transparent outline-none cursor-pointer"
                >
                  <option value="EN">EN (English)</option>
                  <option value="TH">TH (Thai)</option>
                  <option value="ID">ID (Bahasa Indonesia)</option>
                  <option value="TW">TW (Traditional Chinese)</option>
                </select>
              </div>
            </div>
          </div>

          <button
            className={`${
              isAtTop ? "bg-transparent border-2 " : "bg-[#ff8d58]"
            }  text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition duration-300 flex justify-center items-center gap-2`}
          >
            <span>Contact Us</span>
            <span>
              <IoIosArrowForward />
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden text-2xl  text-white`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Always bg-blue-400) */}
      <div
        className={`fixed top-[60px] left-0 w-full bg-blue-500 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Items */}
        <ul className="flex flex-col items-center space-y-4 text-white text-lg py-4">
          <li>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>
              NavLink 1
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>
              NavLink 2
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>
              NavLink 3
            </a>
          </li>
          <li>
            <a href="#" className="bg-white text-blue-500 px-4 py-2 rounded-md">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
