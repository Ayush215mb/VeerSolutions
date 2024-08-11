import React from "react";
import ReactBenifitTemplate from "./ReactBenifitTemplate";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import { IoIosSpeedometer } from "react-icons/io";
import { AiFillFund } from "react-icons/ai";
import { BsRocketTakeoffFill } from "react-icons/bs";

import { FaUsers } from "react-icons/fa6";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
const ReactJsTWO = () => {
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
            Why React?
          </h3>
          <p className="md:text-2xl text-lg font-medium text-wrap">
            React offers a number of benefits for developers and businesses
            alike.
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
                heading="Rapid development"
                text="React's modular design allows for easy 
                integration with other technologies, making it
                 the perfect choice for complex software applications."
                icon={IoIosSpeedometer}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={AiFillFund}
                heading="Scalable & Efficient"
                text="React provides a scalable foundation that adapts to your growing business needs, delivering unparalleled performance at every level."
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
                heading="Good for complex projects"
                text="We love helping our clients skyrocket their ideas. Our partnerships range all the way from established brands, to innovative startups and funded ventures."
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
                icon={FaUsers}
                heading="Enhanced User Experience"
                text="React uses a virtual DOM to ensure smooth and speedy rendering. This leads to improved user experience as the applications load faster and run seamlessly, even in high-data requirements scenarios"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={PiHandCoinsBold}
                heading="Cost-Effective Solution"
                text="React's reusable component structure not only speeds up the development process but also reduces the overall cost. This makes it a cost-effective choice for businesses looking to get high-quality web applications in a short time frame."
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={MdElectricBolt}
                heading="Rich ecosystem and active community support"
                text="Benefit from the robust global React community that constantly enriches the platform with new advancements and thorough documentation."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactJsTWO;
