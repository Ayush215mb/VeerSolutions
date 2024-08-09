import React from "react";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";

import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";

const NextJsTWO = () => {
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col items-center md:items-center text-center justify-center gap-10 md:max-w-3xl max-w-sm px-3 "
        >
          <h3 className="md:text-3xl text-xl text-wrap font-semibold">
            Why Choose Next.js for Your Business?
          </h3>
          <p className="md:text-2xl text-lg font-medium text-wrap">
            As a prominent software agency, Veer Solutions harnesses the
            remarkable capabilities of Next.js to deliver high-performing web
            applications.
          </p>
        </motion.div>
        <div className="  py-3">
          <div className="flex gap-5 flex-col md:flex-row">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
                heading="SEO Optimization"
                text="Next.js is built with SEO-friendly features, increasing your website's visibility and driving more organic traffic."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
                heading="Server-Side Rendering"
                text="Next.js allows for server-side rendering, improving your application's performance and user experience."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
                heading="Scalability"
                text="With Next.js, your web application can easily handle growing user demand, adapting to your business's expansion and your users' changing needs."
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
                imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
                heading="Faster Load Times"
                text="Thanks to automatic code splitting, Next.js optimizes the load time of your web pages, leading to a better user experience."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
                heading="Community and Ecosystem"
                text="Next.js has a lively community and a comprehensive ecosystem of libraries and tools, ensuring ongoing support and innovation."
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ReactBenifitTemplate
                imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
                heading="Hybrid Rendering"
                text="Next.js offers the flexibility of both server-side rendering and static site generation, allowing you to choose the best approach based on your needs for each individual page."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextJsTWO;
