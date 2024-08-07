import ContactUsFORM from "../Components/ContactUs/ContactUsFORM";
import ContactUsONE from "../Components/ContactUs/ContactUsONE";
import Navbar from "../Components/Navbar";
const ContactUs = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className=" flex flex-col lg:flex-row  md:flex-row m-20 gap-16 md:gap-40 md:m-28">
        <ContactUsONE />
        <ContactUsFORM />
      </main>
    </div>
  );
};

export default ContactUs;
