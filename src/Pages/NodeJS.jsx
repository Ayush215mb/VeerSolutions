import React from "react";
import Navbar from "../Components/Navbar";
import NodeJsONE from "../Components/Services/NodeJS/NodeJsONE";
import NodeJsTWO from "../Components/Services/NodeJS/NodeJsTWO";
import NodeJsTHREE from "../Components/Services/NodeJS/NodeJsTHREE";
import NodeJsFOUR from "../Components/Services/NodeJS/NodeJsFOUR";
import Footer from "../Components/Footer";
const NodeJS = () => {
  return (
    <div className="px-5">
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
        <NodeJsONE />
        <NodeJsTWO />
        <NodeJsTHREE />
        <NodeJsFOUR />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default NodeJS;
