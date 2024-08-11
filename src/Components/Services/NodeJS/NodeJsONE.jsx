import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";

const NodeJsONE = () => {
  return (
    <div className="flex  mt-20 flex-col mb-10  items-center justify-center">
      <motion.img
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        alt="Nextjs_img"
        className="mb-14 max-w-60 md:max-w-64"
        src="https://www.lexis.solutions/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5gydaotbo8jm%2F2PYK3TUHinJUE2HaIj1Fyr%2F1d3f8b53c7086403ea1506f1bdf5df14%2Fnode_js.png%3Ffm%3Dwebp&w=256&q=75"
      />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col gap-8 md:max-w-3xl py-3 px-5"
      >
        <h1 className="md:text-4xl text-xl font-extrabold text-wrap">
          Node.js Development Services: Elevating Your Backend Performance and
          Scalability
        </h1>
        <p className="md:text-2xl text-md font-medium text-wrap">
          Embark on an extraordinary journey with our top-tier Node.js software
          agency. Our adept team at Veer Solutions, pioneers innovative
          solutions that elevate businesses to new heights.
        </p>
      </motion.div>
    </div>
  );
};

export default NodeJsONE;
