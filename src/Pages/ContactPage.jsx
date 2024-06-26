import React from "react";
import PageBanner from "../Components/PageBanner/PageBanner";
import Title from "../Components/Title/Title";
import Contact from "../Components/Contact/Contact";
import contact_banner from "../assets/contact-banner.webp";

const ContactPage = () => {
  return (
    <div>
      <PageBanner title="Contact Us" banner={contact_banner} />
      <div className="container">
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
