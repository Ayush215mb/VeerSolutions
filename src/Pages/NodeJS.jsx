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
