import Navbar from "../Components/Navbar";

import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import Footer from "../Components/Footer";
const Blog = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="md:mb-60 mb-20">
        <div className="text-xl text-wrap text-center gap-5 text-red-600 font-medium my-10">
          <p>
            This website is developed by Ayush Yadav
            <br />
            THIS IS NOT A REAL AGENCY WEBSITE <br />
            this is just one of my projects
          </p>
          <a
            href="https://ayush215mb.vercel.app/"
            target="_blank"
            className="hover:text-white"
          >
            <p>
              Click to get connected to me (the developer) to make awesome
              websites like this
            </p>
          </a>
        </div>
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex items-center justify-center m-28"
        >
          <p className=" text-3xl font-bold ">BLOGS COMING SOON</p>
        </motion.div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
