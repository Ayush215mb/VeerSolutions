import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PortfolioONE from "../Components/Portfolio/PortfolioONE";
import PortfolioTWO from "../Components/Portfolio/PortfolioTWO";
const Portfolio = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>
      <main className="md:mb-36 mb-20">
        <PortfolioONE />
        <PortfolioTWO />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
