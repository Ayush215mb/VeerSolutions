import React from "react";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";

const NextJsTWO = () => {
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:items-center text-center justify-center gap-10 md:max-w-3xl max-w-sm px-3 ">
          <h3 className="md:text-3xl text-xl text-wrap font-semibold">
            Why Choose Next.js for Your Business?
          </h3>
          <p className="md:text-2xl text-lg font-medium text-wrap">
            As a prominent software agency, Lexis Solutions harnesses the
            remarkable capabilities of Next.js to deliver high-performing web
            applications.
          </p>
        </div>
        <div className="  py-3">
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="SEO Optimization"
              text="Next.js is built with SEO-friendly features, increasing your website's visibility and driving more organic traffic."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Server-Side Rendering"
              text="Next.js allows for server-side rendering, improving your application's performance and user experience."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Scalability"
              text="With Next.js, your web application can easily handle growing user demand, adapting to your business's expansion and your users' changing needs."
            />
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Faster Load Times"
              text="Thanks to automatic code splitting, Next.js optimizes the load time of your web pages, leading to a better user experience."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Community and Ecosystem"
              text="Next.js has a lively community and a comprehensive ecosystem of libraries and tools, ensuring ongoing support and innovation."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Hybrid Rendering"
              text="Next.js offers the flexibility of both server-side rendering and static site generation, allowing you to choose the best approach based on your needs for each individual page."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextJsTWO;
