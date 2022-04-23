import React from "react";
import "./MakeAppointment.css";
import doctorImage from "../../../images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctorImage} alt="doctorImage" className="img-fluid" />
          </div>
          <div className="col-md-7 text-white zIndex">
            <h5 className="text-primary text-uppercase pt-5">Appointment</h5>
            <h2 className="my-4">
              Make an appointment <br /> Today
            </h2>
            <p className="mb-5">
              It is a long established fact that reader will be distractedby the
              readable content of a page when looking at its
            </p>
            <button className="learnMore-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
