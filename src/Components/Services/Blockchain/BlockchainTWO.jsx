import React from "react";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import { PiCubeTransparentDuotone } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { GoPasskeyFill, GoSortDesc } from "react-icons/go";
import { TbExchangeOff } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";
import { SiDynatrace } from "react-icons/si";
const BlockchainTWO = () => {
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
            Why Blockchain?
          </h3>
          <p className="md:text-2xl text-lg font-medium text-wrap">
            Blockchain offers a number of benefits for the small scale
            businesses and protecting the privacy of userdata.
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
                icon={PiCubeTransparentDuotone}
                heading="Transparency"
                text="All transactions are recorded on a public ledger, ensuring transparency and making it easy to verify the authenticity of data."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={MdOutlineSecurity}
                heading="Security"
                text="Blockchain uses cryptographic techniques to secure data, making it highly resistant to hacking and fraud."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={GoSortDesc}
                heading="Decentralization"
                text="Transactions are processed by a distributed network of nodes, reducing the risk of centralized control and single points of failure."
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
                icon={TbExchangeOff}
                heading="Immutability"
                text="Once data is recorded on the blockchain, it cannot be altered or deleted, ensuring data integrity and trustworthiness."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={IoIosSpeedometer}
                heading="Efficiency"
                text="Automated processes and smart contracts reduce the need for intermediaries, speeding up transactions and reducing costs."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                icon={SiDynatrace}
                heading="Traceability"
                text="Blockchain provides a clear and unalterable audit trail, making it easy to trace the history and origin of assets and transactions."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainTWO;
