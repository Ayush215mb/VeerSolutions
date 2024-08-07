import Lottie from "lottie-react";
import { useRef } from "react";
import ReactJSAnime from "../../../assets/ReactJS.json";
const ReactNativeONE = () => {
  const ReactJSAnimeRef = useRef();
  return (
    <div className="flex  mt-20 flex-col  items-center justify-center">
      <Lottie
        animationData={ReactJSAnime}
        loop={false}
        lottieRef={ReactJSAnimeRef}
        className="max-w-sm"
      />
      {/* <img
        alt="Nextjs_img"
        className="mb-14 max-w-40 md:max-w-64"
        src="https://www.lexis.solutions/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5gydaotbo8jm%2F2PYK3TUHinJUE2HaIj1Fyr%2F1d3f8b53c7086403ea1506f1bdf5df14%2Fnode_js.png%3Ffm%3Dwebp&w=256&q=75"
      /> */}
      <div className="flex flex-col gap-8 md:max-w-3xl max-w-sm  p-5">
        <h1 className="md:text-4xl text-md font-extrabold text-wrap">
          React Native Development Services: Empowering Your Mobile Experience
        </h1>
        <p className="md:text-2xl text-xs font-medium text-wrap">
          Embark on your journey towards app excellence with Lexis Solutions,
          the leading React Native software agency based in Sofia, Bulgaria. Our
          expert team crafts state-of-the-art mobile solutions that amplify your
          business reach.
        </p>
      </div>
    </div>
  );
};

export default ReactNativeONE;
