import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import faTimes for the close icon
import { useState } from "react";
import Navbar from "./Navbar";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToHomePage = () => {
    navigate("/"); // Navigate to the homepage
    setIsOpen(false); // Close the sidebar after navigating
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="md:hidden m-5 sm:ml-20">
        {/* X icon for navigating to homepage at the top right */}
        <button onClick={goToHomePage} className="absolute top-8 right-5 cursor-pointer bg-transparent bg-black">
  <FontAwesomeIcon icon={faTimes} className="text-white text-2xl z-50" />
</button>


        <div className="relative inline-block">
          <Link className="block px-4 py-2 hover:bg-gray-700 text-white" onClick={toggleMenu}>
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
              <Link
                to="/services/Web-3"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                Web 3
              </Link>
              <Link
                to="/services/Blockchain-Development"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                Blockchain
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/Portfolio"
          className="block px-4 py-2 hover:bg-gray-700 text-white"
        >
          Portfolio
        </Link>
        <Link
          to="/blog"
          className="block px-4 py-2 hover:bg-gray-700 text-white"
        >
          Blog
        </Link>
        <Link
          to="/About-Us"
          className="block px-4 py-2 hover:bg-gray-700 text-white"
        >
          About Us
        </Link>
        <Link
          to="/Careers"
          className="block px-4 py-2 hover:bg-gray-700 text-white"
        >
          Careers
        </Link>
      </div>
    </div>
  );
};

export default SideNavBar;
