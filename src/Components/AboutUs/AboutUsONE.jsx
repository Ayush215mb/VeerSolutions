import { useRef, useState } from "react";
import Lottie from "lottie-react";
import PeopleWorkingAnime from "../../assets/PeopleWorking.json";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const AboutUsONE = () => {
  const PeopleWorkingAnimeRef = useRef();
  return (
    // <div className="sm:m-20 my-10 mx-14 lg:m-28">
    <div>
      <div
        className="flex  mx-10 md:mx-36 md:my-16
       sm:flex-row md:gap-20 sm:gap-10 flex-col-reverse gap-4"
      >
        <div className=" flex sm:flex-col flex-col sm:gap-5 md:gap-12 gap-4">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="sm:text-lg  md:text-3xl font-semibold text-wrap sm:max-w-xl"
          >
            Anyone can follow directions. We make the directions better.
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="sm:text-sm text-wrap md:text-xl md:max-w-xl sm:max-w-52 text-sm"
          >
            Composed of software development experts with long track records and
            happy clients, Veer Solutions is the technology partner you’ve been
            looking for.
            <br></br>
            <br></br>
            We won’t just take orders and execute it. Instead, we’ll tell you
            when something doesn’t make sense or it can be done better.
            <br></br>
            <br></br>
            It’s possible to avoid all the problems of traditional development
            solutions by working with a boutique company that understands your
            needs and doesn’t suffer from the communication breakdowns larger
            groups do.
          </motion.p>
        </div>

        <Lottie
          className="sm:max-w-80 md:max-w-xl "
          animationData={PeopleWorkingAnime}
          lottieRef={PeopleWorkingAnimeRef}
          loop={true}
        />
      </div>
    </div>
  );
};

export default AboutUsONE;
