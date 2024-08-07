import React from "react";

const BlockchainONE = () => {
  return (
    <div className="flex  flex-col gap-10 md:gap-16  mt-10 md:mt-20  items-center justify-center">
      <img
        src="/Images/Blockchain.jpg"
        alt="blockchain_img"
        className="md:max-w-lg max-w-60"
      />
      <div className="flex flex-col gap-10 items-center md:max-w-3xl  max-w-sm py-5 mb-10  px-3">
        <h1 className="md:text-4xl text-xl font-extrabold text-wrap">
          Blockchain Development Services: Transforming Data into a Secure and
          Transparent Ecosystem
        </h1>
        <p className="md:text-2xl text-md font-medium text-wrap">
          Unlock the power of decentralized innovation with our blockchain
          development expertise. Revolutionize your business with secure,
          transparent, and tamper-proof solutions crafted by our seasoned
          blockchain professionals.
        </p>
      </div>
    </div>
  );
};

export default BlockchainONE;
