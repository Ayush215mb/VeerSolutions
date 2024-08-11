import React from "react";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";

import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import { PiHandCoinsBold } from "react-icons/pi";
import { TbSocial } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import { TiBeaker } from "react-icons/ti";
import { HiMiniBeaker } from "react-icons/hi2";
import { AiFillFund } from "react-icons/ai";

const ReactNativeTWO = () => {
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col items-center md:items-center text-center justify-center gap-10 md:max-w-3xl max-w-sm "
        >
          <h3 className="md:text-3xl text-xl text-wrap font-semibold">
            Why Choose React Native for Your Business?
          </h3>
          <p className="md:text-2xl text-lg font-medium text-wrap">
            As a top-tier software house, Veer Solutions harnesses the dynamic
            capabilities of React Native to deliver robust mobile applications.
          </p>
        </motion.div>
        <div className=" py-10">
          <div className="flex gap-5 flex-col md:flex-row">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={PiHandCoinsBold}
                heading="Cost-Effectiveness"
                text="React Native allows for code reusability, enabling faster development and reduced costs."
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={TbSocial}
                heading="Cross-Platform Compatibility"
                text="With React Native, you can build apps that work seamlessly on both iOS and Android devices, reaching a wider audience."
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={IoIosSpeedometer}
                heading="Native-Like Performance"
                text="React Native combines the efficiency of native app development with the flexibility of JavaScript, providing fast and smooth user experiences."
              />
            </motion.div>
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={MdElectricBolt}
                heading="Faster Time to Market"
                text="Thanks to its modular approach and pre-built components, React Native accelerates the development process, allowing you to launch your app faster."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={HiMiniBeaker}
                heading="Community and Ecosystem"
                text="React Native has a vibrant community and a vast ecosystem of libraries and tools, ensuring continuous support and innovation."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={AiFillFund}
                heading="Scalability"
                text="React Native apps are highly scalable, accommodating your business's growth and your users' evolving needs."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeTWO;
