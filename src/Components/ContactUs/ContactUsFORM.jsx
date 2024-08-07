import React from "react";

const ContactUsFORM = () => {
  return (
    <div>
      <div className="w-full max-w-md  flex   md:max-w-3xl p-8 bg-gray-800 rounded-xl ">
        <form>
          <div className="flex flex-col gap-3">
            <div className="min-w-96 gap-2 flex flex-col">
              <label className="text-xs md:text-base">
                Your Name
                <span className="text-red-500"> *</span>
              </label>
              <input
                className=" block max-w-32 md:min-w-full py-1 md:p-2 md:mx-auto text-white bg-gray-700 border-0 rounded-sm shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none text-xs"
                // className=""
                placeholder="Please Enter your name"
                required
                type="text"
                name="name"
              />
            </div>

            <div className="min-w-96 ">
              <label>
                your email
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="block md:min-w-full max-w-32 py-1 md:p-2 md:mx-auto text-white bg-gray-700 border-0 rounded-sm shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none text-xs"
                placeholder="Enter Your Email "
                required
                type="email"
                name="email"
              />
            </div>

            <div className="min-w-20">
              <label>
                You want to:
                <span className="text-red-500"> *</span>
              </label>
              <input
                className=" block md:min-w-full max-w-32 py-1 md:p-2 md:mx-auto text-white bg-gray-700 border-0 rounded-sm shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none text-xs"
                placeholder="hire a dev team?"
                required
                type="text"
                name="intention"
              />
            </div>

            <div className="min-w-96">
              <label>
                Your budget($):
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="block md:min-w-full max-w-32 py-1 md:p-2 md:mx-auto text-white bg-gray-700 border-0 rounded-sm shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none text-xs"
                placeholder="specify your budget"
                required
                type="text"
                name="name"
              />
            </div>

            <div className="min-w-96">
              <label>
                Your breif <span className="text-red-500">*</span>
              </label>
              <textarea
                className="block md:min-w-full max-w-32 py-1 md:p-2 md:mx-autotext-white bg-gray-700 border-0 rounded-sm shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none text-xs min-h-16"
                placeholder="Describe Your project in 1-2 sentences"
                required
                type="text"
                name="name"
              ></textarea>
            </div>

            <button className="px-2 max-w-28 md:max-w- md:px-4 py-2 ml-2 mt-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsFORM;
