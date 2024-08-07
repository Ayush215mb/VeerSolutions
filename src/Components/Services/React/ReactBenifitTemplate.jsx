import React from "react";

const ReactBenifitTemplate = ({ imgsrc, heading, text }) => {
  return (
    <div className="max-w-sm min-w-sm p-5 flex flex-col items-center justify-center gap-10 mt-5 rounded-md hover:bg-gray-800 ">
      <div className="flex ">
        <img src={imgsrc} alt="img1" className="max-w-16 " />
      </div>

      <div className="flex flex-col gap-5 items-center ">
        <h3 className="text-2xl text-wrap font-semibold">{heading}</h3>
        <p className=" text-md md:text-lg text-wrap font-medium ">{text}</p>
      </div>
    </div>
  );
};

export default ReactBenifitTemplate;
