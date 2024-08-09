import Lottie from "lottie-react";
import WebAnime from "../../assets/WebDev.json";
import AppAnime from "../../assets/AppDev.json";
import DataAnime from "../../assets/DataSci.json";
import { useRef } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const HeaderTwo = () => {
  const WebAnimeRef = useRef();
  const AppAnimeRef = useRef();
  const DataAnimeRef = useRef();
  return (
    <div className="py-12 md:block   border-t border-gray-800 md:py-16 ">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex my-2 flex-col justify-between items-center gap-9 mx-10 text-center"
      >
        <h1 className=" text-lg lg:text-4xl md:text-2xl text-wrap font-semibold   ">
          We provide full-cycle software development
        </h1>

        <p className=" lg:text-2xl text-md font-medium md:text-xl text-wrap max-w-4xl">
          We offer everything you need to make your software outshine, outlast,
          and outperform the competition.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col-reverse items-center py-5 md:mx-20 md:justify-around  md:flex-row md:mt-28 md:max-h-64 md:gap-20 md:min-h-64 "
      >
        <div className="flex flex-col gap-5  justify-center items-center md:items-start ">
          <h3 className="text-lg  md:text-2xl lg:text-3xl   text-wrap font-semibold">
            Custom web solutions
          </h3>
          <p className="md:text-xl text-sm text-wrap md:max-w-lg ">
            Our web development services make use of React, Next.js, Gatsby,
            Vue, Angular for the front-end, and Node.js, .NET, PHP, and AWS
            services for the back-end.
          </p>
        </div>

        <Lottie
          loop={false}
          animationData={WebAnime}
          lottieRef={WebAnimeRef}
          className="md:max-w-xs max-w-60 "
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col items-center py-5 md:mx-20 md:justify-around  md:flex-row md:mt-28 md:max-h-64 md:gap-20 md:min-h-64 "
      >
        <Lottie
          animationData={AppAnime}
          loop={false}
          lottieRef={AppAnimeRef}
          className="md:max-w-xs max-w-60"
        />
        <div className="flex flex-col gap-5  justify-center items-center md:items-start ">
          <h3 className="text-lg  md:text-2xl lg:text-3xl   text-wrap font-semibold">
            App development
          </h3>
          <p className="md:text-xl text-sm text-wrap md:max-w-lg">
            For the best mobile experience, we use React Native, which allows us
            to craft beautiful applications for both iOS and Android, managing
            one codebase.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col-reverse items-center py-5 md:mx-20 md:justify-around   md:flex-row md:mt-28 md:max-h-64 md:gap-20 md:min-h-64 "
      >
        <div className="flex flex-col gap-5  justify-center items-center md:items-start">
          <h3 className=" text-lg  md:text-2xl lg:text-3xl   text-wrap font-semibold">
            Custom data solutions
          </h3>
          <p className="md:text-xl text-sm text-wrap md:max-w-lg ">
            We develop custom data solutions using databases, APIs, and web
            scraping tools to deliver clean and structured data. Whether you
            need to integrate data from multiple sources, turn complex data into
            actionable insights, or automate data workflows, we can help.
          </p>
        </div>

        <Lottie
          loop={false}
          animationData={DataAnime}
          lottieRef={DataAnimeRef}
          className="md:max-w-xs max-w-60"
        />
      </motion.div>
    </div>
  );
};

export default HeaderTwo;
