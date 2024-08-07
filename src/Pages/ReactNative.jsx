import React from "react";
import Navbar from "../Components/Navbar";
import ReactNativeONE from "../Components/Services/ReactNative/ReactNativeONE";
import ReactNativeTWO from "../Components/Services/ReactNative/ReactNativeTWO";
import ReactNativeTHREE from "../Components/Services/ReactNative/ReactNativeTHREE";
import ReactNativeFOUR from "../Components/Services/ReactNative/ReactNativeFOUR";
const ReactNative = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        REACT NATIVE
        <ReactNativeONE />
        <ReactNativeTWO />
        <ReactNativeTHREE />
        <ReactNativeFOUR />
      </main>
    </div>
  );
};

export default ReactNative;
