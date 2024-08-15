import React from "react";
import Navbar from "../Components/Navbar";
import BlockchainONE from "../Components/Services/Blockchain/BlockchainONE";
import BlockchainTWO from "../Components/Services/Blockchain/BlockchainTWO";
import BlockchainTHREE from "../Components/Services/Blockchain/BlockchainTHREE";
import BlockchainFOUR from "../Components/Services/Blockchain/BlockchainFOUR";
import Footer from "../Components/Footer";

const BlockchainDevlopment = () => {
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
            className="hover:text-white"
          >
            <p>
              Click to get connected to me (the developer) to make awesome
              websites like this
            </p>
          </a>
        </div>
        <BlockchainONE />
        <BlockchainTWO />
        <BlockchainTHREE />
        <BlockchainFOUR />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BlockchainDevlopment;
