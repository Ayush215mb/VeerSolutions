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
