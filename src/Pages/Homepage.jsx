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

      <main className="md:mb-36 mb-20">
        <div className="text-xl text-wrap text-center gap-5 text-red-600 font-medium my-10">
          <p>
            This website is developed by Ayush Yadav
            <br />
            THIS IS NOT A REAL AGENCY WEBSITE <br />
            this is just one of my projects
          </p>
          <a
            href="https://ayush215mb.vercel.app/"
            target="_blank"
            className="hover:text-gray-400 text-white "
          >
            <p>
              Click to get connected to me (the developer) to make awesome
              websites like this
            </p>
          </a>
        </div>
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
