import ContactUsFORM from "../Components/ContactUs/ContactUsFORM";
import ContactUsONE from "../Components/ContactUs/ContactUsONE";
import Navbar from "../Components/Navbar";
const ContactUs = () => {
  return (
    <div className="px-5">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex flex-col gap-10 md:justify-around  md:flex-row">
          <ContactUsONE />
          <ContactUsFORM />
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
