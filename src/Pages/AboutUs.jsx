import AboutUsONE from "../Components/AboutUs/AboutUsONE";
import AboutUsTWO from "../Components/AboutUs/AboutUsTWO";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <AboutUsONE />
        <AboutUsTWO />
      </main>
    </div>
  );
};

export default AboutUs;
