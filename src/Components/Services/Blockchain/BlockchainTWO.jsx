import React from "react";
import ReactBenifitTemplate from "../React/ReactBenifitTemplate";
const BlockchainTWO = () => {
  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:items-center text-center justify-center gap-10 md:max-w-3xl max-w-sm ">
          <h3 className="md:text-3xl text-xl text-wrap font-semibold">
            Why Blockchain?
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
              text="All transactions are recorded on a public ledger, ensuring transparency and making it easy to verify the authenticity of data."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Security"
              text="Blockchain uses cryptographic techniques to secure data, making it highly resistant to hacking and fraud."
            />

            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Decentralization"
              text="Transactions are processed by a distributed network of nodes, reducing the risk of centralized control and single points of failure."
            />
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Immutability"
              text="Once data is recorded on the blockchain, it cannot be altered or deleted, ensuring data integrity and trustworthiness."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Efficiency"
              text="Automated processes and smart contracts reduce the need for intermediaries, speeding up transactions and reducing costs."
            />
            <ReactBenifitTemplate
              imgsrc="https://i.imgur.com/EVJxXwR.jpeg"
              heading="Traceability"
              text="Blockchain provides a clear and unalterable audit trail, making it easy to trace the history and origin of assets and transactions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainTWO;
