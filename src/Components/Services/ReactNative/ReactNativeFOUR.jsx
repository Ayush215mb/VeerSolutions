import Lottie from "lottie-react";
import { useRef } from "react";
import QuestionAnime from "../../../assets/Question.json";
import { Link } from "react-router-dom";

const ReactNativeFOUR = () => {
  const QuestionAnimeRef = useRef();
  return (
    <div className="py-12 border-t m-20 md:m-28  border-gray-800 md:py-16 ">
      <div className="flex flex-col md:flex-row items-center md:gap-16">
        <Lottie
          animationData={QuestionAnime}
          loop={false}
          lottieRef={QuestionAnimeRef}
          className=" max-w-40 md:max-w-sm"
        />
        <div className="flex flex-col justify-center items-right">
          <h1 className=" text-md md:text-4xl font-medium my-7 mb-10 text-wrap max-w-60 md:max-w-3xl">
            Why Choose Us for Your React Native Projects?
          </h1>
          <p className=" text-xs md:text-lg  text-wrap md:max-w-3xl max-w-60">
            When it comes to React Native projects, our expertise is
            well-recognized in the software development industry. Our proficient
            team of React Native experts brings enthusiasm and creativity to
            develop intuitive and cutting-edge solutions.
          </p>
          <br />
          <p className="text-xs md:text-lg md:max-w-3xl max-w-60  text-wrap">
            Through our focused and precise development approach, efficient
            workflows, and unwavering commitment to meeting deadlines and
            staying within budget, we make an excellent partner for transforming
            your React Native concepts into reality.
          </p>
          <br />
          {/* <p className="text-xs md:text-lg md:max-w-3xl max-w-60 text-wrap">
            Beyond development, we provide ongoing support to keep your Node.js
            application running smoothly, aiming for a tool that continually
            adds value to your business.
          </p> */}

          <button className=" px-2 py-1 md:px-4 md:py-2 mt-10 max-w-40    leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block">
            <Link to="/contact-Us">Get in touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeFOUR;
