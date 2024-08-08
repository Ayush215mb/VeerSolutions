import React from "react";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";
const Web3TWO = () => {
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:items-center text-center justify-center gap-10 md:max-w-3xl max-w-sm ">
          <h3 className="md:text-3xl text-xl text-wrap font-semibold">
            Why Web3 ?
          </h3>
          <p className="md:text-2xl text-lg font-medium text-wrap">
            Blockchain offers a number of benefits for the small scale
            businesses and protecting the privacy of userdata.
          </p>
        </div>
        <div className=" py-10">
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Transparency"
              text=" Ensures all transactions and changes are recorded on public ledgers, increasing trust and accountability through verifiable actions."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Interoperability"
              text="Facilitates seamless interaction between different decentralized applications (dApps) and platforms, enabling a more integrated and cohesive ecosystem."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Decentralization"
              text=" Eliminates central points of control by distributing data and services across a network, enhancing security and reducing dependency on single entities."
            />
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="User Ownership"
              text="Empowers users with control over their data and digital assets, reducing privacy concerns and enhancing individual autonomy."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Censorship Resistance"
              text="Protects against censorship by distributing content and services across a decentralized network, ensuring uninterrupted access."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Smart Contracts"
              text="Automates agreements and processes through code, reducing the need for intermediaries and ensuring reliable, tamper-proof execution."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3TWO;
