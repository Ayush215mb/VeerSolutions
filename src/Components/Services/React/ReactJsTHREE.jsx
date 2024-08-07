import React, { useState } from "react";

const ReactJsTHREE = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "Web Applications",
      content:
        "React.js is a top choice for developing dynamic and interactive web applications. Its efficient rendering and state management capabilities provide a seamless and enriched user experience, especially for platforms handling large amounts of data. It offers features like component reusability, which speeds up development and maintenance.",
    },
    {
      title: "Mobile Applications",
      content:
        "By utilizing React Native, we can extend the advantages of React.js to mobile development. This enables us to create cross-platform mobile applications that deliver consistent performance across iOS, Android, and other devices. Users can experience the fluidity and responsiveness of native apps with the convenience of a single, shared codebase.",
    },
    {
      title: "E- Commerce Platforms",
      content:
        "React’s superior efficiency, scalability, and fast rendering capabilities make it an ideal choice for designing eCommerce platforms. With its powerful features, we can provide a seamless and engaging shopping experience to your customers, boosting customer retention and satisfaction. Furthermore, its SEO-friendly nature ensures higher visibility, driving more organic traffic to your platform.",
    },
    {
      title: "Real-Time Applications",
      content:
        "When it comes to real-time applications, such as chat apps or live tracking platforms, React shines by enabling high-speed rendering crucial for real-time responsiveness. Its efficient data handling and state management ensure quick updates and a fluid user experience, even under heavy traffic.",
    },
    {
      title: "Single-Page Applications",
      content:
        "React.js offers great advantages in building SPAs, applications that fit on a single web page for a fluid user experience. With its virtual DOM and efficient diffing algorithm, React ensures swift loading speeds and high performance, thereby enhancing user experience and engagement.",
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
            In what projects does React fit best?
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

export default ReactJsTHREE;
