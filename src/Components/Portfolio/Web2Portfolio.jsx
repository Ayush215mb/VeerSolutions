import React from "react";

const Web2Portfolio = () => {
  return (
    <div className="md:mx-16">
      <div className="flex  flex-col md:flex-row md:gap-40  items-center my-5">
        <img
          src="https://hovhannes-portfolio.vercel.app/images/projects/winit.jpg"
          alt="pebble-img"
          className="max-w-60 mt-5 md:max-w-lg  md:mb-10 md:mt-16 "
        />

        <div>
          <div className=" ">
            <h1 className="text-xl font-bold text-center mb-5 md:text-5xl mt-10">
              WinIt
            </h1>
            <p className="max-w-72 text-md my-5 md:text-xl md:font-medium md:max-w-full text-start">
              WINIT is an optimal health clinic providing clients with
              doctor-recommended, home lab tests, professional coaching, and
              food and symptom tracking software.
            </p>
            <h3 className="text-start md:text-3xl text-xl  font-semibold">
              Challenges:
            </h3>
            <p className="max-w-72 text-md my-5 md:text-lg md:font-medium md:max-w-full text-start  ">
              Bug-fixing on the front-end and back-end, which we conducted, was
              the challenging aspect of working on a project on Personalized
              Home Health Tests and Professional Coaching for Optimal Health.
            </p>
          </div>
          <div className=" flex justify-center">
            <button className=" md:px-8 my-5  md:py-3 px-4 py-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium">
              check Out
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-t border-slate-800  flex-col md:flex-row md:gap-40  items-center my-5 ">
        <img
          src="https://hovhannes-portfolio.vercel.app/images/projects/pebble.jpg"
          alt="pebble-img"
          className="max-w-60 mt-5 md:max-w-lg  md:mb-10 md:mt-16 "
        />
        <div>
          <div className="">
            <h1 className="text-xl font-bold text-center mb-5 md:text-5xl mt-10">
              Pebble
            </h1>
            <p className="max-w-72 text-md my-5 md:text-xl md:font-medium md:max-w-full text-start">
              Pebble is a fintech startup offering the first financial product
              where users are paid to save, spend, and send money — all in one
              balance. You can pay, track, and manage all your bills in one
              place. No more paying transfer fees or having to log in to
              multiple websites.
            </p>
            <h3 className="text-start md:text-3xl text-xl  font-semibold">
              Challenges:
            </h3>
            <p className="max-w-72 text-md my-5 md:text-lg md:font-medium md:max-w-full text-start">
              Connecting all external services from scratch was the challenge
              but we worked on the backend logic to have an efficient financial
              system built on top of the Blockchain.
            </p>
          </div>
          <div className="flex justify-center">
            <button className=" md:px-8 my-5  md:py-3 px-4 py-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium">
              check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web2Portfolio;
