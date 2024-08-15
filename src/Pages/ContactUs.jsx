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
