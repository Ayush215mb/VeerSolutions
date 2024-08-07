import React from "react";
import Navbar from "../Components/Navbar";
import BlockchainONE from "../Components/Services/Blockchain/BlockchainONE";
import BlockchainTWO from "../Components/Services/Blockchain/BlockchainTWO";
import BlockchainTHREE from "../Components/Services/Blockchain/BlockchainTHREE";
import BlockchainFOUR from "../Components/Services/Blockchain/BlockchainFOUR";

const BlockchainDevlopment = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>
      <main>
        <BlockchainONE />
        <BlockchainTWO />
        <BlockchainTHREE />
        <BlockchainFOUR />
      </main>
    </div>
  );
};

export default BlockchainDevlopment;
