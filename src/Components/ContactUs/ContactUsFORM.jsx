import React from "react";

const ContactUsFORM = () => {
  return (
    <div className=" flex justify-center px-10 md:px-32 py-5 md:my-10 md:min-w-96 items-center  mb-10 bg-gray-800 rounded-xl ">
      <form>
        <div className="flex flex-col gap-3 md:gap-7 md:py-5 items-center md:items-center  ">
          <div className=" gap-2 flex flex-col items-start">
            <label className="text-md md:text-2xl">
              Your Name
              <span className="text-red-500"> *</span>
            </label>
            <input
              className="  text-white bg-gray-700 md:min-w-80 border-2  px-4 py-2 rounded-sm   outline-none "
              placeholder="Please Enter your name"
              required
              type="text"
              name="name"
            />
          </div>

          <div className="gap-2 flex flex-col items-start ">
            <label className="text-md md:text-2xl">
              Your email
              <span className="text-red-500"> *</span>
            </label>
            <input
              className=" text-white px-4 py-2  md:min-w-80  bg-gray-700 border-2  rounded-sm    outline-none"
              placeholder="Enter Your Email "
              required
              type="email"
              name="email"
            />
          </div>

          <div className="gap-2 flex flex-col items-start">
            <label className="text-md md:text-2xl">
              You want to:
              <span className="text-red-500"> *</span>
            </label>
            <input
              className=" text-white px-4 py-2  md:min-w-80  bg-gray-700 border-2  rounded-sm    outline-none"
              placeholder="hire a dev team?"
              required
              type="text"
              name="intention"
            />
          </div>

          <div className="gap-2 flex flex-col items-start">
            <label className="text-md md:text-2xl">
              Your budget($):
              <span className="text-red-500"> *</span>
            </label>
            <input
              className=" text-white px-4 py-2  md:min-w-80  bg-gray-700 border-2  rounded-sm    outline-none"
              required
              placeholder="Enter your budeget"
              type="text"
              name="name"
            />
          </div>

          <div className="gap-2 flex flex-col items-start">
            <label className="text-md md:text-2xl">
              Your breif <span className="text-red-500">*</span>
            </label>
            <textarea
              className=" text-white px-4 py-2 min-w-60  md:min-w-80  min-h-20 bg-gray-700 border-2 rounded-sm    outline-none"
              placeholder="Describe Your project in 1-2 sentences"
              required
              type="text"
              name="name"
            ></textarea>
          </div>

          <button className="px-5 my-5 max-w-28 md:max-w- md:px-4 py-3 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsFORM;
