import Lottie from "lottie-react";
import { useRef } from "react";
import ReactJSAnime from "../../../assets/ReactJS.json";

const ReactJsONE = () => {
  const ReactJSAnimeRef = useRef();
  return (
    <div className="flex  flex-col  items-center justify-center">
      <Lottie
        animationData={ReactJSAnime}
        loop={false}
        lottieRef={ReactJSAnimeRef}
        className="max-w-sm"
      />
      <div className="flex flex-col gap-8 md:max-w-3xl max-w-sm py-5 mb-10  px-3">
        <h1 className="md:text-4xl text-md font-extrabold text-wrap">
          React Development Services:
          <br></br>
          Transforming Ideas into a Captivating User Interface
        </h1>
        <p className="md:text-2xl text-xs font-medium text-wrap">
          Unleash your business potential with the premier React development
          agency in India. Discover unrivaled digital transformation with
          cutting-edge solutions driven by our experts.
        </p>
      </div>
    </div>
  );
};

export default ReactJsONE;
