import Lottie from "lottie-react";
import WebAnime from "../../assets/WebDev.json";
import AppAnime from "../../assets/AppDev.json";
import DataAnime from "../../assets/DataSci.json";
import { useRef } from "react";

const HeaderTwo = () => {
  const WebAnimeRef = useRef();
  const AppAnimeRef = useRef();
  const DataAnimeRef = useRef();
  return (
    <div className="py-12 md:block  hidden border-t m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col justify-between items-center gap-9 mx-10 text-center">
        <h1 className=" text-lg lg:text-4xl md:text-2xl text-wrap font-semibold   ">
          We provide full-cycle software development
        </h1>

        <p className=" lg:text-2xl text-xs md:text-xl text-wrap max-w-4xl">
          We offer everything you need to make your software outshine, outlast,
          and outperform the competition.
        </p>
      </div>

      <div className="flex md:mt-28 mt-20 max-h-64  min-h-64 ">
        <div className="flex flex-col gap-5 mb-20 mx-10 px-10 justify-center items-start ">
          <h3 className="text-sm md:text-2xl lg:text-3xl   text-wrap font-medium">
            Custom web solutions
          </h3>
          <p className="md:text-xl text-xs text-wrap ">
            Our web development services make use of React, Next.js, Gatsby,
            Vue, Angular for the front-end, and Node.js, .NET, PHP, and AWS
            services for the back-end.
          </p>
        </div>

        <Lottie
          loop={false}
          animationData={WebAnime}
          lottieRef={WebAnimeRef}
          className="md:max-w-48 max-w-40 "
        />
      </div>

      <div className="flex max-h-64 gap-10 md:gap-5  min-h-64 ">
        <Lottie
          animationData={AppAnime}
          loop={false}
          lottieRef={AppAnimeRef}
          className="md:max-w-48 max-w-20"
        />
        <div className="flex flex-col justify-center gap-5">
          <h3 className="lg:text-3xl text-sm md:text-2xl text-wrap font-medium">
            App development
          </h3>
          <p className="md:text-xl text-xs   text-wrap">
            For the best mobile experience, we use React Native, which allows us
            to craft beautiful applications for both iOS and Android, managing
            one codebase.
          </p>
        </div>
      </div>

      <div className="flex mt-10 max-h-64 min-h-64 ">
        <div className="flex flex-col gap-5 mx-10 px-10 justify-center items-start">
          <h3 className=" lg:text-3xl text-sm md:text-2xl text-wrap font-medium">
            Custom data solutions
          </h3>
          <p className="md:text-xl text-xs text-wrap max-w-5xl ">
            We develop custom data solutions using databases, APIs, and web
            scraping tools to deliver clean and structured data. Whether you
            need to integrate data from multiple sources, turn complex data into
            actionable insights, or automate data workflows, we can help.
          </p>
        </div>

        <Lottie
          loop={false}
          animationData={DataAnime}
          lottieRef={DataAnimeRef}
          className="md:max-w-48 max-w-40"
        />
      </div>
    </div>
  );
};

export default HeaderTwo;
