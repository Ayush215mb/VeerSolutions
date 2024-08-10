import React from "react";
import Navbar from "../Components/Navbar";
import NextJsONE from "../Components/Services/NextJS/NextJsONE";
import NextJsTWO from "../Components/Services/NextJS/NextJsTWO";
import NextJsTHREE from "../Components/Services/NextJS/NextJsTHREE";
import NextJsFOUR from "../Components/Services/NextJS/NextJsFOUR";
import Footer from "../Components/Footer";
const NextJS = () => {
  return (
    <div className="max-w-8xl px-4 sm:px-6 text-white">
      <header>
        <Navbar />
      </header>
      <main className="md:mb-36 mb-20">
        <NextJsONE />
        <NextJsTWO />
        <NextJsTHREE />
        <NextJsFOUR />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default NextJS;
