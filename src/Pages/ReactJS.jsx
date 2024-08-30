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
