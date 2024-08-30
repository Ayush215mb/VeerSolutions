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
