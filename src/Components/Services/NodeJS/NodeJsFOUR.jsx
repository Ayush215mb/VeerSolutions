import Lottie from "lottie-react";
import { useRef } from "react";
import QuestionAnime from "../../../assets/Question.json";
import { Link } from "react-router-dom";

const NodeJsFOUR = () => {
  const QuestionAnimeRef = useRef();
  return (
    <div className="py-12 border-t  md:m-28  border-gray-800 md:py-16 ">
      <div className="flex flex-col md:flex-row items-center md:gap-16">
        <Lottie
          animationData={QuestionAnime}
          loop={false}
          lottieRef={QuestionAnimeRef}
          className=" max-w-60  md:max-w-sm"
        />
        <div className="flex flex-col justify-center items-center mb-5 md:items-right">
          <h1 className=" text-md md:text-4xl font-medium my-7 mb-10 text-wrap  md:max-w-3xl">
            Why Choose Us for Node.js Projects?
          </h1>
          <p className=" text-sm md:text-lg  text-wrap md:max-w-3xl ">
            Our seasoned Node.js developers leverage the latest trends for
            proficient and advanced solutions. We craft custom applications
            aligned with your business vision and goals.
          </p>
          <br />
          <p className="text-sm md:text-lg md:max-w-3xl  text-wrap">
            Utilizing agile methodologies, we ensure transparent communication,
            timely delivery, and superior quality.
          </p>
          <br />
          <p className="text-sm md:text-lg md:max-w-3xl  text-wrap">
            Beyond development, we provide ongoing support to keep your Node.js
            application running smoothly, aiming for a tool that continually
            adds value to your business.
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

export default NodeJsFOUR;
