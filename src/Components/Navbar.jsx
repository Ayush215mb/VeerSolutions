import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SideNavBar from "./SideNavBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [TMopen, setTMopen] = useState(false);

  const toggleMenu = () => {
    setTMopen(!TMopen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex   max-wd-8xl p-5 justify-between md:justify-around ">
      <div className="">
        <Link
          to="/"
          className="flex justify-center items-center gap-3 text-lg text-white"
        >
          <img src={"Images/logo.jpeg"} alt="Logo_img" className=" max-w-12 " />
          <span>Veer Solutions</span>
        </Link>
      </div>

      <div className="flex gap-2 ">
        <ul className=" flex-wrap hidden  md:flex  justify-end items-center text-lg cursor-pointer  ">
          <li>
            <div
              className="relative  inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to=""
                className="flex items-center px-4 py-2  text-gray-300 transition duration-150 ease-in-out rounded hover:bg-opacity-50 hover:bg-gray-700 hover:text-gray-200"
              >
                Services
                <FontAwesomeIcon
                  icon={isOpen ? faChevronUp : faChevronDown}
                  className="ml-2"
                />
              </Link>
              {isOpen && (
                <div className="absolute min-w-40 ml-5 bg-gray-800 mt-1 shadow-lg z-10">
                  <Link
                    to="/services/React-development"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    React
                  </Link>
                  <Link
                    to="/services/NextJS-development"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Next.js
                  </Link>
                  <Link
                    to="/services/NodeJS-development"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Node.js
                  </Link>
                  <Link
                    to="/services/React-Native-development"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    React Native
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link
              className="flex items-center px-4 py-2  text-gray-300 transition duration-150 ease-in-out rounded hover:bg-opacity-50 hover:bg-gray-700 hover:text-gray-200"
              to="/Portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center px-4 py-2  text-gray-300 transition duration-150 ease-in-out rounded hover:bg-opacity-50 hover:bg-gray-700 hover:text-gray-200"
              to="/Blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center px-4 py-2  text-gray-300 transition duration-150 ease-in-out rounded hover:bg-opacity-50 hover:bg-gray-700 hover:text-gray-200"
              to="/About-Us"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center px-4 py-2  text-gray-300 transition duration-150 ease-in-out rounded hover:bg-opacity-50 hover:bg-gray-700 hover:text-gray-200"
              to="/Careers"
            >
              Careers
            </Link>
          </li>
        </ul>
        <button className="hidden px-4 py-2 ml-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block">
          <Link to="/Contact-Us"> Let's talk</Link>
        </button>
        <div className="font-3xl grid md:hidden">
          <button className="text-gray-400 hover:text-white focus:outline-none">
            <Link to="/SideNavbar">
              <FaBars />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
