import ContactUsFORM from "../Components/ContactUs/ContactUsFORM";
import ContactUsONE from "../Components/ContactUs/ContactUsONE";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
const ContactUs = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>
      <main className="md:mb-36 mb-20">
        <div className="flex flex-col gap-10 md:justify-around  md:flex-row">
          <ContactUsONE />
          <ContactUsFORM />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ContactUs;
