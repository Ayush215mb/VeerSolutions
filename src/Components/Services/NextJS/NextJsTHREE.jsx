import { useState } from "react";
const NextJsTHREE = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "Single Page Applications (SPAs)",
      content:
        "Next.js's superior server-side rendering capabilities make it the go-to choice for developing high-performance SPAs. Its robust features help enhance the user experience by enabling faster page loading and smooth navigation, which is crucial for effective SPAs.",
    },
    {
      title: "Startups and Small Businesses",
      content:
        "Next.js, with its SEO-optimized features, provides an edge for startups and small businesses striving to enhance their online presence. It facilitates higher visibility on search engines, attracting more organic traffic and potential customers, vital for businesses in their early stages.",
    },
    {
      title: "E- Commerce Platforms",
      content:
        "The ability of Next.js to deliver fast-loading, interactive pages makes it particularly suited for creating engaging and user-friendly e-commerce platforms. It allows for a seamless shopping experience, driving customer satisfaction and increasing sales conversions.",
    },
    {
      title: "Social Networking Sites",
      content:
        "Leveraging Next.js's server-side rendering and real-time update capabilities, you can develop highly interactive social networking and communication websites. Its features enable real-time data handling, ensuring a vibrant and engaging user experience.",
    },
    {
      title: "Enterprise Applications",
      content:
        "Next.js is proficient in creating complex enterprise-level applications, enabling businesses to optimize their processes and boost productivity. Its scalable architecture can handle large volumes of data and transactions, making it ideal for businesses with complex workflows.",
    },
    {
      title: "Legacy Website Modernization",
      content:
        "If you're seeking to modernize an existing website, Next.js can be your ally. It can rejuvenate outdated websites with improved performance, a refreshed UI, and enhanced user experience, thereby driving user engagement and satisfaction.",
    },
  ];

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="py-12 border-t md:m-28 border-gray-800 md:py-16 ">
      <div className="flex md:gap-x-80   mb-5 items-center flex-col md:flex-row ">
        <div className="max-w-xl min-w-lg flex justify-center ">
          <img
            src="https://www.lexis.solutions/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5gydaotbo8jm%2F6leqvCo1o3iebzKZxTTivj%2F01238478d0054648bc8fcbf36fafe57c%2Fbusinessman.png%3Ffm%3Dwebp&w=384&q=75"
            alt="Thinking"
            className="min-w-20 max-w-60 md:max-w-lg "
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-20 ">
          <h2 className="text-xl md:text-4xl font-semibold mt-5">
            Where Does Next.js Excel?
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

                  <span className="md:text-3xl text-sm font-semibold ">
                    {expanded === index ? "-" : "+"}
                  </span>
                </div>
                {expanded === index && (
                  <div className="  px-4 py-2 max-w-xl ">
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

export default NextJsTHREE;
