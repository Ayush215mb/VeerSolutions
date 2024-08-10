import Navbar from "../Components/Navbar";

import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
const Blog = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
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
    </div>
  );
};

export default Blog;
