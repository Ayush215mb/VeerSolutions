import Navbar from "../Components/Navbar";
import Lottie from "lottie-react";
import WorkAnime from "../assets/Work.json";
import { useRef } from "react";
import CareerONE from "../Components/Careers/CareerONE";
const Careers = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <CareerONE />
      </main>
    </div>
  );
};

export default Careers;
