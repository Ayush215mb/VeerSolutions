import React from "react";
import Navbar from "../Components/Navbar";
import Web3ONE from "../Components/Services/Web3/Web3ONE";
import Web3TWO from "../Components/Services/Web3/Web3TWO";
import Web3THREE from "../Components/Services/Web3/Web3THREE";
import Web3FOUR from "../Components/Services/Web3/Web3FOUR";

const Web3 = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>
      <main>
        <Web3ONE />
        <Web3TWO />
        <Web3THREE />
        <Web3FOUR />
      </main>
    </div>
  );
};

export default Web3;
