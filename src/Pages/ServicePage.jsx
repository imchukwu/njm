import React from "react";
import Title from "../Components/Title/Title";
import PageBanner from "../Components/PageBanner/PageBanner";
import services_banner from "../assets/services-banner.png";
import ServiceCards from "../Components/ServiceCards/ServiceCards";
import service_1 from "../assets/service-1.png";
import service_2 from "../assets/service-2.png";
import service_3 from "../assets/service-3.png";

const services = [
  {
    image: service_1,
    title: "Heat Treatment Solutions",
    description:
      "NJM perform a vast range of heat treatment services which include Post Weld Heat Treatment (PWHT), pre-heat, annealing, tempering, stress relieving, dry outs, furnace work and other heat treatment techniques needed in the engineering sphere, Both electrical resistance and gas fired methods are employed to specific client requirements; our service includes written procedures and protocols needed in this critical phase of engineering manufacture and maintenance.",
  },
  {
    image: service_2,
    title: "Non-Destructive Examination(NDE)",
    description:
      "NJM perform a vast array of NDT services and specialize in several “high tech” disciplines that include, Phased Array Ultrasonic Testing (PAUT), Digital Radiography (DRT)(CRT), 3D scanning, Tank Floor Testing (TFT) and C Scan Ultrasonic mapping; in addition, we perform standard Ultrasonic Testing (UT), Radiographic testing (RT), Magnetic Particle testing (MT), Penetrant testing (PT), Positive Material Inspection (PMI) and Hardnes Testing (HT). NJM have no less than three certified Level III professionals.",
  },
  {
    image: service_3,
    title: "Complimentary Services",
    description:
      "NJM understands the importance of supporting its clients throughout the entire project lifecycle.  In addition to their comprehensive heat treatment and non-destructive testing services, NJM offers a complimentary consultation to assess your specific needs and recommend the most appropriate solutions.  This consultation can cover areas like material testing, welding procedure development, NDT inspection planning, and data analysis.  NJM's expertise can help you optimize your project from start to finish.",
  },
];

const ServicePage = () => {
  return (
    <div>
      <PageBanner title="Our Services" banner={services_banner} />
      <div className="container" style={{ marginTop: "3rem" }}>
        <Title subTitle="Our SERVICES" title="What We Offer" />
        <ServiceCards services={services} />
      </div>
    </div>
  );
};

export default ServicePage;
