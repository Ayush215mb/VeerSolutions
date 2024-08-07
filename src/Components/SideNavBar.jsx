import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Navbar from "./Navbar";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="md:hidden m-5 sm:ml-20  ">
        <div
          className="relative inline-block"
          //   onMouseEnter={handleMouseEnter}
          //   onMouseLeave={handleMouseLeave}
          onClick={ToggleMenu}
        >
          <Link
            // to="/services/React-development"
            className="block px-4 py-2 text-white"
          >
            Services
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              className="ml-2"
            />
          </Link>
          {isOpen && (
            <div className="absolute ml-16 min-w-40 bg-gray-800 mt-1 shadow-lg z-10">
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

        <Link
          to="/Portfolio"
          className="block px-4 py-2 text-white"
          //
        >
          Portfolio
        </Link>
        <Link to="/blog" className="block px-4 py-2 text-white">
          blog
        </Link>
        <Link to="/About-Us" className="block px-4 py-2 text-white">
          About us
        </Link>
        <Link to="/Careers" className="block px-4 py-2 text-white">
          careers
        </Link>
      </div>
    </div>
  );
};

export default SideNavBar;
