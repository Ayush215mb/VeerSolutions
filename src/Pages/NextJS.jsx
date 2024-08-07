import React from "react";
import Navbar from "../Components/Navbar";
import NextJsONE from "../Components/Services/NextJS/NextJsONE";
import NextJsTWO from "../Components/Services/NextJS/NextJsTWO";
import NextJsTHREE from "../Components/Services/NextJS/NextJsTHREE";
import NextJsFOUR from "../Components/Services/NextJS/NextJsFOUR";
const NextJS = () => {
  return (
    <div className="max-w-8xl px-4 sm:px-6 text-white">
      <header>
        <Navbar />
      </header>
      <main>
        <NextJsONE />
        <NextJsTWO />
        <NextJsTHREE />
        <NextJsFOUR />
      </main>
    </div>
  );
};

export default NextJS;
