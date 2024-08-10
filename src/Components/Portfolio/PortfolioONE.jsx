import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const PortfolioONE = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="mx-2 lg:px-32 md:py-10 md:flex items-center md:flex-col md:gap-10"
    >
      <h1 className="text-xl md:text-5xl font-bold my-5 text-wrap">
        Unleashing the power of custom software
      </h1>
      <p className="text-md md:text-3xl text-wrap md:max-w-3xl">
        We have successfully partnered with businesses ranging from established
        brands to innovative startups and funded ventures.
      </p>
    </motion.div>
  );
};

export default PortfolioONE;
