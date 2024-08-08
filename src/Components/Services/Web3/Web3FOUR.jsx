import Lottie from "lottie-react";
import { useRef } from "react";
import QuestionAnime from "../../../assets/Question.json";
import { Link } from "react-router-dom";

const Web3FOUR = () => {
  const QuestionAnimeRef = useRef();
  return (
    <div className="py-12 border-t  md:m-28  border-gray-800 md:py-16">
      <div className="flex flex-col md:flex-row items-center md:gap-16">
        <Lottie
          animationData={QuestionAnime}
          loop={false}
          lottieRef={QuestionAnimeRef}
          className=" max-w-60 md:max-w-sm"
        />
        <div className="flex flex-col px-2 justify-center items-center md:items-right mb-5">
          <h1 className=" text-md md:text-4xl font-medium my-7 mb-10 text-wrap md:max-w-3xl">
            Why do people choose us for Web3 projects?
          </h1>
          <p className=" text-sm md:text-lg  text-wrap md:max-w-3xl ">
            As pioneers in Web3 development, we excel in transforming visionary
            ideas into decentralized realities.
          </p>
          <br />
          <p className="text-sm md:text-lg md:max-w-3xl   text-wrap">
            Our experts are driven by a passion for creating secure,
            transparent, and user-focused solutions.
          </p>
          <br />
          <p className="text-sm md:text-lg md:max-w-3xl  text-wrap">
            With cutting-edge tech, precision, and a commitment to timely,
            budget-friendly delivery, we turn your Web3 dreams into reality.
          </p>
          <div className="min-w-40 flex items-center">
            <button className=" px-3 py-2 md:px-4 md:py-2 mt-10 max-w-40    leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block">
              <Link to="/contact-Us">Get in touch</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3FOUR;
