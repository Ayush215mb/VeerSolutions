import { Link } from "react-router-dom";

const HeaderFive = () => {
  return (
    <div className=" py-12 border-t mx-10 md:m-28 mb-16 border-gray-800 md:py-16">
      <div className="flex flex-col justify-center lg:items-start md:items-start items-center gap-10">
        <h1 className=" lg:text-5xl md:text-3xl text-md text-wrap font-semibold">
          Partner with a bolder software agency
        </h1>
        <p className="lg:text-2xl md:text-lg text-sm text-wrap max-w-xl tex">
          Looking for top app developers in India?
          <br></br>
          We have partnered with ambitious companies and entrepreneurs.
        </p>
        <button className=" md:px-8  md:py-3 px-4 py-2 leading-snug text-white transition-colors bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 lg:block text-lg font-medium">
          <Link to="/Contact-Us">Let's talk</Link>
        </button>
      </div>
    </div>
  );
};

export default HeaderFive;
