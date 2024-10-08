import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

function ContactForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "",
    budget: "",
    brief: "",
  });

  const handleOptionClick = (option, field) => {
    setFormData({
      ...formData,
      [field]: option,
    });
    setSelectedOption(option);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, option, budget, brief } = formData;

    const subject = `Hello there, I am ${name}`;
    const body = `I am applying for ${option} with a budget of $${budget}.
    Here is a brief of my project: ${brief}`;
    const mailtoLink = `mailto:sidharth197502@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  // veer.149610@gmail.com,
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="md:my-10">
        <form
          className="max-w-md mx-auto bg-gray-800 p-5 rounded-lg text-white"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label className="block mb-2 text-lg">Your name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-4 rounded-md bg-gray-700 border-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-lg">Your email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-4 rounded-md bg-gray-700 border-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-lg">You want to: *</label>
            <div className="flex gap-2 ">
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border-2 transition ${
                  formData.option === "build a product"
                    ? "border-cyan-500 bg-gray-700"
                    : "border-gray-700"
                }`}
                onClick={() => handleOptionClick("build a product", "option")}
              >
                build a product
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border-2 transition ${
                  formData.option === "hire a dev team"
                    ? "border-cyan-500 bg-gray-700"
                    : "border-gray-700"
                }`}
                onClick={() => handleOptionClick("hire a dev team", "option")}
              >
                hire a dev team
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border-2 transition ${
                  formData.option === "other"
                    ? "border-cyan-500 bg-gray-700"
                    : "border-gray-700"
                }`}
                onClick={() => handleOptionClick("other", "option")}
              >
                other
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-lg">Your budget ($): *</label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border-2 transition ${
                  formData.budget === "10k"
                    ? "border-cyan-500 bg-gray-700"
                    : "border-gray-700"
                }`}
                onClick={() => handleOptionClick("10k", "budget")}
              >
                XS
                <br />
                <small>&lt; 10K</small>
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border-2 transition ${
                  formData.budget === "10k - 25k"
                    ? "border-cyan-500 bg-gray-700"
                    : "border-gray-700"
                }`}
                onClick={() => handleOptionClick("10k - 25k", "budget")}
              >
                S<br />
                <small>10K - 25K</small>
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border-2 transition ${
                  formData.budget === "25k - 50k"
                    ? "border-cyan-500 bg-gray-700"
                    : "border-gray-700"
                }`}
                onClick={() => handleOptionClick("25k - 50k", "budget")}
              >
                M<br />
                <small>25K - 50K</small>
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border-2 transition ${
                  formData.budget === "50k+"
                    ? "border-cyan-500 bg-gray-700"
                    : "border-gray-700"
                }`}
                onClick={() => handleOptionClick("50k+", "budget")}
              >
                L<br />
                <small>50K+</small>
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="brief" className="block mb-2 text-lg">
              Your brief: *
            </label>
            <textarea
              id="brief"
              name="brief"
              value={formData.brief}
              onChange={handleChange}
              className="w-full py-2 px-4 min-h-20 rounded-md bg-gray-700 border-none"
              placeholder="Describe your project in 1-2 sentences"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-cyan-500 rounded-md hover:bg-cyan-600"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;
