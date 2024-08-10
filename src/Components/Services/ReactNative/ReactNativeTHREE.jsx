import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../../Variants";
const ReactNativeTHREE = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "Real-time applications",
      content:
        "Node.js is perfect for crafting real-time collaborative applications such as chat platforms, gaming servers, and live event streaming services. Its event-driven, non-blocking I/O model allows for high performance and low latency, making it suitable for applications that need real-time data transfer and synchronization.",
    },
    {
      title: "Minimum Viable Products (MVPs)",
      content:
        "By enabling rapid prototyping and MVP development, React Native facilitates quick validation of your app ideas. This allows you to test your concept in the market and gather user feedback faster, giving you a valuable edge in a competitive environment.",
    },
    {
      title: "Startups and Small Businesses",
      content:
        "React Native's cost-effectiveness and cross-platform capabilities make it a go-to solution for startups and small businesses working within budget constraints. By allowing for a single codebase that works across different platforms, React Native reduces development time and cost while ensuring consistent performance.",
    },
    {
      title: "E-commerce Applications",
      content:
        "Leveraging React Native's ability to deliver native-like experiences, you can build engaging and user-friendly e-commerce apps that enhance user interaction and drive sales. Its efficient performance on both Android and iOS devices ensures a seamless shopping experience for all your customers.",
    },
    {
      title: "Social Networking Apps",
      content:
        "With React Native's high performance and real-time update capabilities, you can develop interactive social networking and communication applications. These features ensure a dynamic, engaging user experience, keeping users involved and boosting user retention.",
    },
    {
      title: "Enterprise Applications",
      content:
        "React Native is proficient in creating complex enterprise-level applications. It streamlines business processes and enhances productivity by enabling efficient workflows and seamless communication across various platforms, making it an ideal choice for larger businesses with complex requirements.",
    },
    {
      title: "Legacy App Modernization",
      content:
        "If you're looking to modernize an existing app, React Native can be your perfect ally. It can rejuvenate your app with improved performance, a refreshed user interface, and updated features, thereby driving user engagement and satisfaction while staying in line with current trends.",
    },
  ];

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex md:gap-x-80 mb-5 items-center flex-col md:flex-row ">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="max-w-xl min-w-lg flex justify-center "
        >
          <img
            src="https://www.lexis.solutions/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5gydaotbo8jm%2F6leqvCo1o3iebzKZxTTivj%2F01238478d0054648bc8fcbf36fafe57c%2Fbusinessman.png%3Ffm%3Dwebp&w=384&q=75"
            alt="Thinking"
            className="min-w-20 max-w-60 md:max-w-lg "
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col gap-10 md:gap-20 "
        >
          <h2 className="text-xl md:text-4xl font-semibold mt-5">
            In what projects does React fit best?
          </h2>
          <ul className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer text-md md:text-2xl p-2 border-b my-0 md:my-2 gap-2"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-md md:text-2xl font-medium">
                    {project.title}
                  </p>

                  <span className="md:text-3xl text-md font-semibold ">
                    {expanded === index ? "-" : "+"}
                  </span>
                </div>
                {expanded === index && (
                  <div className="  px-4 py-2 max-w-xl ">
                    <p className="text-sm md:text-lg">{project.content}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ReactNativeTHREE;
