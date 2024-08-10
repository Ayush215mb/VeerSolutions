import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { CiShare1 } from "react-icons/ci";
const Web3Portfolio = () => {
  return (
    <div className="md:mx-16">
      <div className="flex  flex-col md:flex-row md:gap-40  items-center my-5 ">
        <img
          src="https://www.westchain.org/_next/image?url=%2Fprojects%2FcryptoLegend.png&w=1920&q=75"
          alt=" Cryptolegions-img"
          className="max-w-60 mt-5 md:max-w-lg  md:mb-10 md:mt-16 md:min-w-96 "
        />
        <div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h1 className="text-xl font-bold text-center mb-5 md:mb-10 md:text-5xl mt-10">
              Cryptolegions
            </h1>
            <p className="max-w-72 text-md my-5 md:text-xl md:font-medium md:max-w-full text-start">
              An innovative Play-To-Earn NFT game on the Binance Smart Chain,
              featuring minting, hunting, trading on an NFT marketplace, a smart
              claim system, and reincarnation capabilities.
            </p>
            <div className="md:flex md:items-center md:gap-10">
              <h3 className="text-start md:text-3xl text-xl  font-semibold">
                Software used:
              </h3>
              <ul className="md:flex md:gap-10 md:text-xl font-medium md:font-semibold">
                <li>Node.js</li>
                <li>Typescript</li>
                <li>Web3.js</li>
                <li>SEO</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex justify-center"
          >
            <a href="https://cryptolegions.app/" target="_blank">
              <button className=" md:px-8 my-5  md:py-3 px-4 py-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium">
                <div className="flex gap-2 font-semibold items-center">
                  check Out <CiShare1 className="font-black text-xl " />
                </div>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row md:gap-40  items-center my-5 ">
        <img
          src="https://whistle-dev.vercel.app/static/media/proyecto-14.b383f4870d817a69601e.jpg"
          alt=" Mirage-img"
          className="max-w-60 mt-5 md:max-w-lg  md:min-w-96 md:mb-10 md:mt-16 "
        />
        <div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h1 className="text-xl font-bold text-center mb-5 md:mb-10 md:text-5xl mt-10">
              Mirage
            </h1>
            <p className="max-w-72 text-md my-5 md:text-xl md:font-medium md:max-w-full text-start">
              An innovative Play-To-Earn NFT game on the Binance Smart Chain,
              featuring minting, hunting, trading on an NFT marketplace, a smart
              claim system, and reincarnation capabilities.
            </p>
            <div className="md:flex md:items-center ">
              <h3 className="text-start md:text-3xl text-xl  font-semibold">
                Software used:
              </h3>
              <ul className="md:flex md:gap-6  md:text-xl font-medium md:font-semibold">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Solana</li>
                <li>Web3</li>
                <li>Rust</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex justify-center"
          >
            <a href="https://www.miragelaunchpad.xyz/" target="_blank">
              <button className=" md:px-8 my-5  md:py-3 px-4 py-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium">
                <div className="flex gap-2 font-semibold items-center">
                  check Out <CiShare1 className="font-black text-xl " />
                </div>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Web3Portfolio;
