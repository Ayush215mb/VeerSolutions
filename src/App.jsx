import Homepage from "./Pages/Homepage";
import ReactJS from "./Pages/ReactJS";
import NextJS from "./Pages/NextJS";
import NodeJS from "./Pages/NodeJS";
import ReactNative from "./Pages/ReactNative";
import Blog from "./Pages/Blog";
import AboutUs from "./Pages/AboutUs";
import Careers from "./Pages/Careers";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Pages/ContactUs";
import SideNavBar from "./Components/SideNavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SideNavbar" element={<SideNavBar />} />
        <Route path="/services/React-development" element={<ReactJS />} />
        <Route path="/services/NextJS-development" element={<NextJS />} />
        <Route path="/services/NodeJS-development" element={<NodeJS />} />
        <Route
          path="/services/React-Native-development"
          element={<ReactNative />}
        />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
