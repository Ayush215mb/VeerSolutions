import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ReactJsFOUR from "../Components/Services/React/ReactJsFOUR";
import ReactJsONE from "../Components/Services/React/ReactJsONE";
import ReactJsTHREE from "../Components/Services/React/ReactJsTHREE";
import ReactJsTWO from "../Components/Services/React/ReactJsTWO";

const ReactJS = () => {
  return (
    <div className="max-w-8xl px-4 sm:px-6 text-white">
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
            className="hover:text-white"
          >
            <p>
              Click to get connected to me (the developer) to make awesome
              websites like this
            </p>
          </a>
        </div>
        <ReactJsONE />
        <ReactJsTWO />
        <ReactJsTHREE />
        <ReactJsFOUR />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ReactJS;
