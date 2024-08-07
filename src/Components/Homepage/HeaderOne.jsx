import Lottie from "lottie-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import ComputerAnime from "./../../assets/computer.json";

const HeaderOne = () => {
  const AniRef = useRef();

  return (
    <div className="text-white flex flex-col-reverse  items-center md:flex-row mt-5 mx-7 md:m-28 gap-6 md:gap-12  ">
      <div className="flex flex-col items-center gap-6 md:gap-10 p-6 md:p-10">
        <h1 className="sm:text-xl text-sm md:text-4xl max-w-2xl text-wrap flex justify-center items-center ">
          Build your digital solutions with expert help
        </h1>

        <p className="text-wrap flex justify-center max-w-80 md:max-w-xl items-center  text-xs sm:text-sm md:text-xl">
          Share your challenge with our team, who will work with you to deliver
          a revolutionary digital product.
        </p>

        <button className=" md:px-4 md:py-2 py-2 px-3  leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 max-w-48  lg:block">
          <Link to="/Contact-Us"> Get in touch</Link>
        </button>
      </div>

      <Lottie
        //       // onComplete={() => {
        //       //   console.log("complete");
        //       //   AniRef.current.goToAndPlay(5, true);
        //       // }}
        lottieRef={AniRef}
        loop={false}
        animationData={ComputerAnime}
        className="md:max-w-xl sm:max-w-lg   max-w-40 lg:max-w-2xl"
      />
    </div>
  );
};

export default HeaderOne;
