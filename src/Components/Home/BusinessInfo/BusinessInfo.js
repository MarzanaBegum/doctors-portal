import React from "react";
import {
  faClock,
  faLocationDot,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import Info from "../Info/Info";

const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn NY 1003,USA",
    icon: faLocationDot,
    background: "dark",
  },
  {
    title: "Contact Us",
    description: "+15980765436",
    icon: faPhoneFlip,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row g-0 w-75">
        {infoData.map((info) => (
          <Info info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
