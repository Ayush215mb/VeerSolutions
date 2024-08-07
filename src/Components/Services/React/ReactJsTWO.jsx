import React from "react";
import ReactBenifitTemplate from "./ReactBenifitTemplate";

const ReactJsTWO = () => {
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:items-center text-center justify-center gap-10 md:max-w-3xl max-w-sm ">
          <h3 className="md:text-3xl text-xl text-wrap font-semibold">
            Why React?
          </h3>
          <p className="md:text-2xl text-lg font-medium text-wrap">
            React offers a number of benefits for developers and businesses
            alike.
          </p>
        </div>
        <div className=" py-10">
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Rapid development"
              text="React's modular design allows for easy integration with other technologies, making it the perfect choice for complex software applications."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Scalable & Efficient"
              text="React provides a scalable foundation that adapts to your growing business needs, delivering unparalleled performance at every level."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Good for complex projects"
              text="We love helping our clients skyrocket their ideas. Our partnerships range all the way from established brands, to innovative startups and funded ventures."
            />
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Enhanced User Experience"
              text="React uses a virtual DOM to ensure smooth and speedy rendering. This leads to improved user experience as the applications load faster and run seamlessly, even in high-data requirements scenarios"
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Cost-Effective Solution"
              text="React's reusable component structure not only speeds up the development process but also reduces the overall cost. This makes it a cost-effective choice for businesses looking to get high-quality web applications in a short time frame."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Rich ecosystem and active community support"
              text="Benefit from the robust global React community that constantly enriches the platform with new advancements and thorough documentation."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactJsTWO;
