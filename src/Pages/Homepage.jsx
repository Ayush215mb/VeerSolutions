import Footer from "../Components/Footer";
import HeaderFive from "../Components/Homepage/HeaderFive";
import HeaderFour from "../Components/Homepage/HeaderFour";
import HeaderOne from "../Components/Homepage/HeaderOne";
import HeaderTwo from "../Components/Homepage/HeaderTwo";
import Navbar from "../Components/Navbar";

const Homepage = () => {
  return (
    <div className="max-w-8xl px-5 sm:px-6 text-white">
      <header>
        <Navbar />
      </header>

      <main>
        <HeaderOne />
        <HeaderTwo />
        <HeaderFour />
        <HeaderFive />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
