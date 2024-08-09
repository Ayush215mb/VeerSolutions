import Lottie from "lottie-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ComputerAnime from "./../../assets/computer.json";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const HeaderOne = () => {
  const AniRef = useRef();

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="text-white flex flex-col-reverse  items-center md:flex-row mt-5  md:m-28 gap-6 md:gap-12 mb-5  "
    >
      <div className="flex flex-col items-center md:items-start gap-6 md:gap-10 px-3 py-4 md:p-10">
        <h1
          className={` sm:text-xl text-xl md:text-4xl font-semibold max-w-2xl text-wrap flex justify-center items-center  `}
        >
          Build your digital solutions with expert help
        </h1>

        <p
          className={`text-wrap flex justify-center max-w-80 md:max-w-xl items-center  text-lg sm:text-sm md:text-xl   `}
        >
          Share your challenge with our team, who will work with you to deliver
          a revolutionary digital product.
        </p>

        <button className=" md:px-4 md:py-2 py-2 px-3  leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 max-w-48  lg:block">
          <Link to="/Contact-Us"> Get in touch</Link>
        </button>
      </div>

      <Lottie
        //       // onComplete={() => {
        //       //   console.log("complete");
        //       //   AniRef.current.goToAndPlay(5, true);
        //       // }}
        lottieRef={AniRef}
        loop={false}
        animationData={ComputerAnime}
        className="md:max-w-xl sm:max-w-lg  max-w-60 lg:max-w-2xl"
      />
    </motion.div>
  );
};

export default HeaderOne;
