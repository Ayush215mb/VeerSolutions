import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";

const NextJsONE = () => {
  return (
    <div className="flex my-6  md:mt-20 flex-col mb-16   items-center justify-center">
      <motion.img
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        alt="Nextjs_img"
        className="mb-14 max-w-40 md:max-w-64 "
        src="https://www.lexis.solutions/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5gydaotbo8jm%2FbUrTuQvSBfmiRK3aJTALa%2F86f4edd8a574ee1ead2ec372cf08f303%2Fnextjs-boilerplate-logo.png%3Ffm%3Dwebp&w=256&q=75"
      />
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col gap-8 md:max-w-3xl max-w-md  px-3"
      >
        <h1 className="md:text-4xl text-md font-extrabold text-wrap">
          Next.js Development Services: Boosting Web Experiences with Superior
          Performance
        </h1>
        <p className="md:text-2xl text-sm font-medium text-wrap">
          Elevate your web solutions with Veer Solutions, the premier Next.js
          development agency based in Sofia, Bulgaria. Our proficient team
          designs superior web applications that magnify your business presence.
        </p>
      </motion.div>
    </div>
  );
};

export default NextJsONE;
