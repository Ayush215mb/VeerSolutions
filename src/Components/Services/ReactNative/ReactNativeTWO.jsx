import React from "react";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";
const ReactNativeTWO = () => {
  return (
    <div className="py-12 border-t m-16 md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:items-center text-center justify-center gap-3 md:gap-10 md:max-w-3xl max-w-sm ">
          <h3 className="md:text-3xl text-md text-wrap font-semibold">
            Why Choose React Native for Your Business?
          </h3>
          <p className="md:text-2xl text-sm font-medium text-wrap">
            As a top-tier software house in Sofia, Bulgaria, Lexis Solutions
            harnesses the dynamic capabilities of React Native to deliver robust
            mobile applications.
          </p>
        </div>
        <div className="md:m-10 md:p-10 m-5 p-5">
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Cost-Effectiveness"
              text="React Native allows for code reusability, enabling faster development and reduced costs."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Cross-Platform Compatibility"
              text="With React Native, you can build apps that work seamlessly on both iOS and Android devices, reaching a wider audience."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Native-Like Performance"
              text="React Native combines the efficiency of native app development with the flexibility of JavaScript, providing fast and smooth user experiences."
            />
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Faster Time to Market"
              text="Thanks to its modular approach and pre-built components, React Native accelerates the development process, allowing you to launch your app faster."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Community and Ecosystem"
              text="React Native has a vibrant community and a vast ecosystem of libraries and tools, ensuring continuous support and innovation."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Scalability"
              text="React Native apps are highly scalable, accommodating your business's growth and your users' evolving needs."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeTWO;
