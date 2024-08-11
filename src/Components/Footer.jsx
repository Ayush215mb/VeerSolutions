import React from "react";
const Footer = () => {
  return (
    <div className="md:flex md:my-10 md:mx-20 md:items-center md:justify-around ">
      <div className=" my-10 ">
        <div className="flex  items-start  gap-3 text-md ">
          <img
            src="/Images/logo.jpeg"
            alt="Logo_img"
            className=" max-w-16 md:max-w-16 "
          />
          {/* <p>Veer Solutions</p> */}
        </div>
        <p className="max-w-full mt-5 text-sm md:text-xl md:max-w-md">
          Veer Solutions is a software agency on a mission to turn innovative
          ideas into groundbreaking digital products.
        </p>
      </div>

      <div className="my-5 flex flex-col justify-center items-start md:px-10">
        <h4 className="text-md font-semibold md:text-3xl">Contact</h4>

        <p className="text-sm my-1 md:text-xl">Akshay Yadav</p>
        <p className="text-sm md:text-xl">Founder</p>
        <div className="flex gap-3  my-2">
          <a href="mailto:veer.149610@gmail.com?subject=Hello there,&cc=sidharth197502@gmail.com">
            <img
              alt="gmail-icon"
              src="/Images/Gmail-icon.png"
              className="max-w-8"
            />
          </a>
          <a href="https://t.me/Veer149610" target="_blank">
            <img
              alt="telegram-icon"
              className="max-w-8"
              src="/Images/Telegram-icon.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
