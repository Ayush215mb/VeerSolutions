import Navbar from "../Components/Navbar";
import PortfolioONE from "../Components/Portfolio/PortfolioONE";
import PortfolioTWO from "../Components/Portfolio/PortfolioTWO";
const Portfolio = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>
      <main>
        <PortfolioONE />
        <PortfolioTWO />
      </main>
    </div>
  );
};

export default Portfolio;
