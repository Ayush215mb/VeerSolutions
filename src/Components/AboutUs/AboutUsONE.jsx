import { useRef, useState } from "react";
import Lottie from "lottie-react";
import PeopleWorkingAnime from "../../assets/PeopleWorking.json";

const AboutUsONE = () => {
  const PeopleWorkingAnimeRef = useRef();
  return (
    // <div className="sm:m-20 my-10 mx-14 lg:m-28">
    <div>
      <div
        className="flex  mx-10 md:mx-36 md:my-16
       sm:flex-row md:gap-20 sm:gap-10 flex-col-reverse gap-4"
      >
        <div className=" flex sm:flex-col flex-col sm:gap-5 md:gap-12 gap-4">
          <h1 className="sm:text-lg  md:text-3xl font-semibold text-wrap sm:max-w-xl">
            Anyone can follow directions. We make the directions better.
          </h1>
          <p className="sm:text-sm text-wrap md:text-lg md:max-w-xl sm:max-w-52 text-sm">
            Composed of software development experts with long track records and
            happy clients, Lexis Solutions is the technology partner you’ve been
            looking for.
            <br></br>
            We won’t just take orders and execute to a T. Instead, we’ll tell
            you when something doesn’t make sense or it can be done better.
            <br></br>
            It’s possible to avoid all the problems of traditional development
            solutions by working with a boutique company that understands your
            needs and doesn’t suffer from the communication breakdowns larger
            groups do.
          </p>
        </div>

        <Lottie
          className="sm:max-w-80 md:max-w-xl "
          animationData={PeopleWorkingAnime}
          lottieRef={PeopleWorkingAnimeRef}
          loop={false}
        />
      </div>
    </div>
  );
};

export default AboutUsONE;
