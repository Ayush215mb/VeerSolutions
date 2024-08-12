import Lottie from "lottie-react";
import WorkAnime from "../../assets/Work.json";
import { useRef } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const CareerONE = () => {
  const WorkAnimeRef = useRef();
  return (
    <div className="flex  mt-10 flex-col  items-center justify-center">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 px-7 mb-10 md:gap-32"
      >
        <Lottie
          loop={true}
          lottieRef={WorkAnimeRef}
          animationData={WorkAnime}
          className="max-w-64 md:max-w-lg"
        />
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="md:text-5xl md:font-bold font-semibold text-xl">
            Join Veer Solutions
          </h1>
          <div className="flex flex-col gap-2 md:gap-7 items-left justify-center">
            <p className="flex md:items-center items-start gap-2  md:gap-4  text-md md:text-3xl">
              <AiOutlineCaretRight className=" text-sm sm:text-md text-red-500 md:text-xl" />
              Flexible Work Schedule
            </p>
            <p className="flex  md:items-center items-start gap-2 md:gap-4 text-md sm:text-md  md:text-3xl">
              <AiOutlineCaretRight className=" text-md text-red-500 md:text-xl" />
              Competitive Salary
            </p>
            <p className="flex  md:items-center items-start gap-2  md:gap-4  text-md sm:text-md md:text-3xl">
              <AiOutlineCaretRight className=" text-md text-red-500 md:text-xl" />
              Teambuildings & Events
            </p>
            <p className="flex  md:items-center items-start gap-2  md:gap-4  text-md sm:text-md  md:text-3xl">
              <AiOutlineCaretRight className=" text-md text-red-500 md:text-xl" />
              Annual Bonus
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col items-center gap-5 py-12 border-t  md:mx-28 md:my-20  border-gray-800 md:py-16">
        <h3 className="text-md md:text-3xl mt-3 mx-7 md:mt-5">
          Mail Us your resume and we will get back to you
        </h3>
        <a href="mailto:veer.149610@gmail.com,sidharth197502@gmail.com?subject=Hello there, I am {name}&body=I am applying for {*****} position as a Part-time/ Full-time/Internship and I have attached my resume/portfolio in this mail ">
          <motion.button
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:px-8  md:py-3 px-2 py-1 leading-snug text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium"
          >
            SEND MAIL
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default CareerONE;
