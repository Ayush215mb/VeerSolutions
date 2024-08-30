import Navbar from "../Components/Navbar";
import CareerONE from "../Components/Careers/CareerONE";
import Footer from "../Components/Footer";
const Careers = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>

      <main className="md:mb-36 mb-20">
        <CareerONE />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Careers;
