import Lottie from "lottie-react";
import WorkAnime from "../../assets/Work.json";
import { useRef } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
const CareerONE = () => {
  const WorkAnimeRef = useRef();
  return (
    <div className="flex  mt-10 flex-col  items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-7 mb-10 md:gap-32">
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
      <div className="flex flex-col items-center gap-5 py-12 border-t  md:m-28 border-gray-800 md:py-16">
        <h3 className="text-md md:text-3xl mt-3 mx-7 md:mt-5">
          Mail Us your resume and we will get back to you
        </h3>
        <a href="mailto:veer.149610@gmail.com?subject=Hello there, I am {name}&body=I am applying for {*****} position as a Part-time/ Full-time/Internship and I have attached my resume/portfolio in this mail&cc=sidharth197502@gmail.com">
          <button className="md:px-8  md:py-3 px-2 py-1 leading-snug text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium">
            SEND MAIL
          </button>
        </a>
      </div>
    </div>
  );
};

export default CareerONE;
