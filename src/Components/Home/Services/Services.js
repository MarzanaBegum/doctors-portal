import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    title: "Fluoride Treatement",
    img: fluoride,
  },
  {
    title: "Cavity Filling",
    img: cavity,
  },
  {
    title: "Teeth whitening",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section className=" mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3A4256", fontWeight: "700" }}>
          Services We Provide
        </h2>
      </div>
      <div className="mt-5 pt-5 d-flex justify-content-center">
        <div className="row g-0 w-75">
          {serviceData.map((service) => (
            <ServiceDetail service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
