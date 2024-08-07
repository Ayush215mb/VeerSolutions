import Lottie from "lottie-react";
import WorkAnime from "../../assets/Work.json";
import { useRef } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
const CareerONE = () => {
  const WorkAnimeRef = useRef();
  return (
    <div className="flex  mt-10 flex-col  items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 md:gap-32">
        <Lottie
          loop={false}
          lottieRef={WorkAnimeRef}
          animationData={WorkAnime}
          className="max-w-64 md:max-w-lg"
        />
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="md:text-5xl md:font-bold font-semibold text-xl">
            Join Veer Solutions
          </h1>
          <div className="flex flex-col gap-2 md:gap-7 items-left justify-center">
            <p className="flex md:items-center items-start gap-2  md:gap-4  text-md md:text-3xl">
              <AiOutlineCaretRight className=" text-sm sm:text-md text-red-500 md:text-xl" />
              Flexible Work Schedule
            </p>
            <p className="flex  md:items-center items-start gap-2 md:gap-4 text-md sm:text-md  md:text-3xl">
              <AiOutlineCaretRight className=" text-md text-red-500 md:text-xl" />
              Competitive Salary
            </p>
            <p className="flex  md:items-center items-start gap-2  md:gap-4  text-md sm:text-md md:text-3xl">
              <AiOutlineCaretRight className=" text-md text-red-500 md:text-xl" />
              Teambuildings & Events
            </p>
            <p className="flex  md:items-center items-start gap-2  md:gap-4  text-md sm:text-md  md:text-3xl">
              <AiOutlineCaretRight className=" text-md text-red-500 md:text-xl" />
              Annual Bonus
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-md md:text-3xl mt-3 mx-7 md:mt-5">
          Mail Us your resume and we will get back to you
        </h3>
        <a href="mailto:sidharth197502@gmail.com?subject=Hello there&body=This is a predefined email body&cc=someone@example.com,bcc=someoneelse@example.com">
          SEND MAIL
        </a>
      </div>
    </div>
  );
};

export default CareerONE;
