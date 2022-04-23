import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="m-3">
        <img src={service.img} alt="serviceImage" style={{ height: "50px" }} />
        <h5
          className="mt-4 mb-4"
          style={{ color: "#3A4256", fontSize: "16px" }}
        >
          {service.title}
        </h5>
        <p className="text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
