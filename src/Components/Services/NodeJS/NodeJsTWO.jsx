import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";
import { IoIosSpeedometer } from "react-icons/io";
import { HiMiniBeaker } from "react-icons/hi2";
import { PiHandCoinsBold } from "react-icons/pi";
import { TbSocial } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { BsRocketTakeoffFill } from "react-icons/bs";
const NodeJsTWO = () => {
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col items-center md:items-center text-center justify-center gap-10 md:gap-10 md:max-w-3xl max-w-sm px-3 "
        >
          <h3 className="md:text-3xl text-xl text-wrap font-semibold">
            Why Choose Node.js
          </h3>
          <p className="md:text-2xl text-md font-medium text-wrap">
            We leverage the impressive benefits of Node.js to serve our diverse
            clientele.
          </p>
        </motion.div>
        <div className="py-3">
          <div className="flex gap-5 flex-col md:flex-row">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={IoIosSpeedometer}
                heading="Unleash speed and scalability"
                text="Harness the full potential of Node.js to build lightning-fast, scalable web applications that can handle a massive number of concurrent connections and data-intensive tasks."
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
                heading="Real-time interactivity"
                text="With Node.js, create real-time features like chat applications, collaboration tools, and live data streaming that keep your users engaged and enhance user experience."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={PiHandCoinsBold}
                heading="Efficiency and productivity"
                text="Benefit from Node.js's non-blocking, event-driven architecture, which allows for efficient handling of requests and boosts developer productivity by facilitating code reusability."
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
                icon={TbSocial}
                heading="Cross-platform compatibility"
                text="Node.js enables seamless development across different platforms, ensuring your web application works consistently and flawlessly on desktops, mobile devices, and IoT devices."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={MdElectricBolt}
                heading="Extensive package ecosystem"
                text="Tap into the vast ecosystem of Node.js packages and libraries, empowering you to build and integrate powerful functionalities into your web applications rapidly."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={BsRocketTakeoffFill}
                heading="Powerhouse for Microservices"
                text="Our Node.js experts employ its lightweight nature to craft scalable and easily maintainable microservices architectures."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeJsTWO;
