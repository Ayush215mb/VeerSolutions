import React, { useState } from "react";

const Web3THREE = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "Decentralized Finance (DeFi)",
      content:
        " Facilitates peer-to-peer financial services like lending, borrowing, and trading without intermediaries, providing greater accessibility and transparency.",
    },
    {
      title: "Decentralized Applications (dApps)",
      content:
        " Runs applications on a decentralized network, ensuring enhanced security, transparency, and user control over data and functionalities.",
    },
    {
      title: "NFT Marketplaces",
      content:
        " Enables the creation, buying, and selling of non-fungible tokens (NFTs), providing artists and creators with new revenue streams and ownership rights.",
    },
    {
      title: "Decentralized Social Networks",
      content:
        "Provides platforms free from central control, ensuring privacy, censorship resistance, and user ownership of content and data.",
    },
    {
      title: "Supply Chain Management",
      content:
        "Ensures transparency and traceability across the supply chain, reducing fraud and increasing efficiency by leveraging decentralized ledger technology.",
    },
  ];
  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className="py-12 border-t  md:m-28 border-gray-800 md:py-16 ">
      <div className="flex md:gap-x-80  mb-5 items-center flex-col md:flex-row">
        <div className="max-w-xl min-w-lg flex justify-center ">
          <img
            src="https://www.lexis.solutions/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5gydaotbo8jm%2F6leqvCo1o3iebzKZxTTivj%2F01238478d0054648bc8fcbf36fafe57c%2Fbusinessman.png%3Ffm%3Dwebp&w=384&q=75"
            alt="Thinking"
            className="min-w-20 max-w-60 md:max-w-lg "
          />
        </div>

        <div className="flex flex-col gap-10  md:gap-20">
          <h2 className="text-xl md:text-4xl font-semibold mt-5">
            In what projects does Web3 fit best?
          </h2>
          <ul className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer text-md md:text-2xl p-2 border-b my-0 md:my-2 gap-2"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-md md:text-2xl font-medium">
                    {project.title}
                  </p>
                  <span className="md:text-3xl text-md font-semibold ">
                    {expanded === index ? "-" : "+"}
                  </span>
                </div>
                {expanded === index && (
                  <div className="  px-4 py-2 max-w-xl">
                    <p className="text-sm md:text-lg">{project.content}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Web3THREE;
