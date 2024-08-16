import React from "react";
import Navbar from "../Components/Navbar";
import Web3ONE from "../Components/Services/Web3/Web3ONE";
import Web3TWO from "../Components/Services/Web3/Web3TWO";
import Web3THREE from "../Components/Services/Web3/Web3THREE";
import Web3FOUR from "../Components/Services/Web3/Web3FOUR";
import Footer from "../Components/Footer";

const Web3 = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>
      <main className="md:mb-36 mb-20">
        <div className="text-xl text-wrap text-center gap-5 text-red-600 font-medium my-10">
          <p>
            This website is developed by Ayush Yadav
            <br />
            THIS IS NOT A REAL AGENCY WEBSITE <br />
            this is just one of my projects
          </p>
          <a
            href="https://ayush215mb.vercel.app/"
            target="_blank"
            className="hover:text-gray-400 text-white "
          >
            <p>
              Click to get connected to me (the developer) to make awesome
              websites like this
            </p>
          </a>
        </div>
        <Web3ONE />
        <Web3TWO />
        <Web3THREE />
        <Web3FOUR />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Web3;
