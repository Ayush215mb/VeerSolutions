import React from "react";

const ContactUsONE = () => {
  return (
    <div>
      <div className="flex flex-col m-10 md:m-0 gap-10">
        <h1 className="md:text-4xl md:font-bold font-semibold text-md">
          Let’s talk about your project
        </h1>
        <p className="md:text-2xl text-sm max-w-sm md:max-w-lg">
          We’re a team of developers, designers, and strategists who work with
          companies of all sizes to design, build, and grow digital products.
          Here's how to get started:
        </p>
        <div className="flex flex-col text-xs md:text-xl gap-4">
          <p>✒️ You fill out the form</p>
          <p> 📩 We get back to you within 24 hours </p>
          <p> 🤙 We schedule a discovery call</p>
          <p> 📃 You get a bussiness proposal</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsONE;
