import React from "react";

const ContactUsONE = () => {
  return (
    <div className="flex flex-col my-5 md:my-10 lg:ml-20  text-center md:text-start md:p-5 gap-5">
      <h1 className="md:text-4xl md:font-bold font-semibold text-xl">
        Let’s talk about your project
      </h1>
      <p className="md:text-2xl text-md  md:max-w-lg py-5">
        We’re a team of developers, designers, and strategists who work with
        companies of all sizes to design, build, and grow digital products.
        Here's how to get started:
      </p>
      <div className="flex flex-col ml-10 md:ml-0 sm:ml-60 text-start text-md md:text-xl gap-4">
        <p>✒️ You fill out the form</p>
        <p> 📩 We get back to you within 24 hours </p>
        <p> 🤙 We schedule a discovery call</p>
        <p> 📃 You get a bussiness proposal</p>
      </div>
    </div>
  );
};

export default ContactUsONE;
