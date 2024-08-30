import React from "react";
import Navbar from "../Components/Navbar";
import ReactNativeONE from "../Components/Services/ReactNative/ReactNativeONE";
import ReactNativeTWO from "../Components/Services/ReactNative/ReactNativeTWO";
import ReactNativeTHREE from "../Components/Services/ReactNative/ReactNativeTHREE";
import ReactNativeFOUR from "../Components/Services/ReactNative/ReactNativeFOUR";
import Footer from "../Components/Footer";
const ReactNative = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>

      <main className="md:mb-36 mb-20">
        <ReactNativeONE />
        <ReactNativeTWO />
        <ReactNativeTHREE />
        <ReactNativeFOUR />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ReactNative;
