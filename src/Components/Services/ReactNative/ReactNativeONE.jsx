import Lottie from "lottie-react";
import { useRef } from "react";
import ReactJSAnime from "../../../assets/ReactJS.json";

import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
const ReactNativeONE = () => {
  const ReactJSAnimeRef = useRef();
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="flex  flex-col  items-center justify-center"
    >
      <Lottie
        animationData={ReactJSAnime}
        loop={false}
        lottieRef={ReactJSAnimeRef}
        className="max-w-sm"
      />

      <div className="flex flex-col gap-8 md:max-w-3xl max-w-sm py-5 mb-10  px-3">
        <h1 className="md:text-4xl text-xl font-extrabold text-wrap">
          React Native Development Services: Empowering Your Mobile Experience
        </h1>
        <p className="md:text-2xl text-md font-medium text-wrap">
          Embark on your journey towards app excellence with Veer Solutions, the
          leading React Native software agency. Our expert team crafts
          state-of-the-art mobile solutions that amplify your business reach.
        </p>
      </div>
    </motion.div>
  );
};

export default ReactNativeONE;
