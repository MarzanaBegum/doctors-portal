import React from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  return (
    <section>
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>Our Doctors</h5>
      </div>
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="row g-0 w-75">
          <Doctor />
          <Doctor />
          <Doctor />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
