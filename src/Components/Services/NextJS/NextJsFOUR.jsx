import Lottie from "lottie-react";
import { useRef } from "react";
import QuestionAnime from "../../../assets/Question.json";
import { Link } from "react-router-dom";

const NextJsFOUR = () => {
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
            Why Choose Us for Your Next.js Projects ?
          </h1>
          <p className=" text-xs md:text-lg  text-wrap md:max-w-3xl max-w-60">
            Looking for a top Next.js website development agency? When it comes
            to Next.js projects, our proficiency is widely acknowledged in the
            field of software development. Our skilled team of Next.js
            professionals boasts significant experience in creating superior web
            applications.
          </p>
          <br />
          <p className="text-xs md:text-lg md:max-w-3xl max-w-60  text-wrap">
            We emphasize transparent communication and close collaboration with
            our clients throughout the development process. Our understanding of
            the unique nature of each business allows us to tailor our solutions
            to meet specific project needs.
          </p>
          <br />
          <p className="text-xs md:text-lg md:max-w-3xl max-w-60 text-wrap">
            With our unwavering dedication to delivering strong and error-free
            applications, we strive to provide unparalleled user experiences.
            Quality is not just a priority; it's our commitment.
          </p>

          <button className=" px-2 py-1 md:px-4 md:py-2 mt-10 max-w-40    leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block">
            <Link to="/contact-Us">Get in touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextJsFOUR;
