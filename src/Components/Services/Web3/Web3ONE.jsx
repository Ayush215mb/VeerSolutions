import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
const Web3ONE = () => {
  return (
    <div className="flex  flex-col gap-10 md:gap-16  mt-10 md:mt-20  items-center justify-center">
      <img
        src="/Images/Web3.jpg"
        alt="Web3_img"
        className="md:max-w-lg max-w-60"
      />
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col gap-10 items-center md:max-w-3xl  max-w-sm py-5 mb-10  px-3"
      >
        <h1 className="md:text-4xl text-xl text-center font-extrabold text-wrap">
          Web3 Development Services: Pioneering the Future of the Decentralized
          Web
        </h1>
        <p className="md:text-2xl text-md font-medium text-wrap">
          Unlock the potential of the next-generation internet with our Web3
          development expertise. Transform your business with decentralized,
          user-centric, and trustless solutions crafted by our seasoned Web3
          professionals.
        </p>
      </motion.div>
    </div>
  );
};

export default Web3ONE;
