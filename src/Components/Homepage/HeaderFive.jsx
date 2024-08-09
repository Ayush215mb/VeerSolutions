import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const HeaderFive = () => {
  return (
    <div className=" py-12 border-t mx-10 md:m-28 mb-16 border-gray-800 md:py-16">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col justify-center lg:items-start md:items-start items-center gap-10"
      >
        <h1 className=" lg:text-5xl md:text-3xl text-md text-wrap font-semibold">
          Partner with a bolder software agency
        </h1>
        <p className="lg:text-2xl md:text-lg text-sm text-wrap max-w-xl tex">
          Looking for top app developers in India?
          <br></br>
          We have partnered with ambitious companies and entrepreneurs.
        </p>
        <motion.button
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className=" md:px-8  md:py-3 px-4 py-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium"
        >
          <Link to="/Contact-Us">Let's talk</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeaderFive;
