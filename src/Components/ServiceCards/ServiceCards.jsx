import React from "react";
import "./ServiceCards.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-image" style={{ width: "40%" }}>
        <img src={image} alt={title} />
      </div>
      <div className="service-description" style={{ width: "60%" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ServiceCards = ({ services }) => {
  return (
    <div className="services-container">
      {services && services.length > 0 ? (
        services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          />
        ))
      ) : (
        <p>No services found.</p>
      )}
    </div>
  );
};
export default ServiceCards;
