import { useRef } from "react";

const HeaderFour = () => {
  const CommuncationAnimeRef = useRef();
  return (
    <div className="  py-12 border-t m-x-10 lg:m-28 border-gray-800 md:py-16  ">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="lg:text-4xl md:text-2xl text-md ml-5  font-semibold">
          A partner that will make your idea better
        </h1>
        <p className=" lg:text-2xl  md:max-w-96 mx-5 lg:max-w-xl lg:p-10 text-lg ">
          The Veer Solutions approach is different because we go above and
          beyond just taking directions. Our team immerses themselves in a
          project as if it is their own.
        </p>
      </div>

      <div className="md:mt-28 md:m-10 mx-5 my-10 flex flex-col lg:flex-row gap-10 justify-between md:gap-20 md:justify-center  items-center md:flex ">
        <div className="flex flex-col gap-7  items-center md:justify-around justify-center">
          <img
            className="md:max-w-40 max-w-16 sm:max-w-20"
            src="https://www.lexis.solutions/_next/image?url=%2Fimages%2F1-communication.png&w=128&q=75"
            alt="img"
          />

          <h3 className="md:text-3xl sm:text-xl  text-wrap text-lg font-semibold">
            Communication is the key
          </h3>
          <p className="md:text-lg lg:text-xl  sm:text-md max-w-lg text-md font-medium">
            Technical skills are essential, but we also prioritize teamwork and
            social skills training for a well-rounded approach.
          </p>
        </div>

        <div className="flex flex-col gap-7 md:justify-around  items-center justify-center">
          <img
            className="md:max-w-40 max-w-16 sm:max-w-20"
            src="https://www.lexis.solutions/_next/image?url=%2Fimages%2F2-no_middlemen.png&w=128&q=75"
            alt="img"
          />
          <h3 className="md:text-3xl sm:text-xl  text-wrap text-lg font-semibold">
            No middlemen
          </h3>
          <p className="md:text-lg lg:text-xl   max-w-lg sm:text-md font-medium text-md">
            We do not sub-contract your project to shady third-party companies
            or freelancers.
          </p>
        </div>

        <div className="flex flex-col gap-7 md:justify-around  items-center justify-center ">
          <img
            className="md:max-w-40 max-w-16 sm:max-w-20"
            src="https://www.lexis.solutions/_next/image?url=%2Fimages%2F3-trust.png&w=128&q=75"
          />
          <h3 className="md:text-3xl sm:text-xl text-lg text-wrap font-semibold">
            Executives you can trust
          </h3>
          <p className="md:text-lg lg:text-xl   max-w-lg sm:text-md text-md font-medium">
            All of our board members have a technical background, guiding the
            process for optimal results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderFour;
