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

      <main>
        <ReactJsONE />
        <ReactJsTWO />
        <ReactJsTHREE />
        <ReactJsFOUR />
      </main>
    </div>
  );
};

export default ReactJS;
