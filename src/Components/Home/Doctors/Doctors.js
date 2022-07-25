import React, { useState, useEffect } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [doctors]);

  return (
    <section>
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>Our Doctors</h5>
      </div>
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="row g-0 w-75">
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
