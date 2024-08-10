import React, { useState } from "react";
import Web2Portfolio from "./Web2Portfolio";
import Web3Portfolio from "./Web3Portfolio";
import BlockchainPortfolio from "./BlockchainPortfolio";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const PortfolioTWO = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const renderComponent = () => {
    switch (activeComponent) {
      case "web2":
        return <Web2Portfolio />;
      case "web3":
        return <Web3Portfolio />;
      case "blockchain":
        return <BlockchainPortfolio />;
      default:
        return <div></div>;
    }
  };
  return (
    <div className="my-10 lg:mx-16 flex flex-col lg:gap-20 items-center justify-center ">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex border-2   bg-gray-700 max-w-full  lg:max-w-3xl 
        lg:min-w-96 "
      >
        <div className="hover:bg-gray-800 border-r py-3 lg:px-5 lg:py-5 lg:text-2xl lg:font-bold text-lg ">
          <button
            onClick={() => setActiveComponent("web2")}
            className=" lg:px-14 px-4 "
          >
            Web 2
          </button>
        </div>
        <div className="hover:bg-gray-800 py-3 lg:px-5 lg:py-5 lg:text-2xl lg:font-bold text-lg">
          <button
            className="lg:px-14  px-4 "
            onClick={() => setActiveComponent("web3")}
          >
            web 3
          </button>
        </div>
        <div className="hover:bg-gray-800 border-l  lg:px-5 lg:py-5 lg:text-2xl lg:font-bold py-3 text-lg">
          <button
            onClick={() => setActiveComponent("blockchain")}
            className=" lg:px-14 px-4 "
          >
            Blockchain
          </button>
        </div>
      </motion.div>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default PortfolioTWO;
