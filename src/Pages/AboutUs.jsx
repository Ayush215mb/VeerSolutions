import AboutUsONE from "../Components/AboutUs/AboutUsONE";
import AboutUsTWO from "../Components/AboutUs/AboutUsTWO";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="md:mb-36 mb-20">
        <AboutUsONE />
        <AboutUsTWO />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;
