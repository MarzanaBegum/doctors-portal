import React, { useEffect, useState } from "react";

const AllPatients = () => {
  const [allPatients, setAllPatients] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-plains-03551.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAllPatients(data);
      });
  }, [allPatients]);

  return (
    <div
      className="row container d-flex align-items-center"
      style={{ height: "60vh" }}
    >
      <div className="col-md-11">
        <h4 className="mt-4 mb-5" style={{ color: "#1cc7c1" }}>
          All Patients
        </h4>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Date</th>
              <th>Gender</th>
              <th scope="col">Name</th>
              <th>Age</th>
              <th>Weight</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient, index) => (
              <tr key={patient._id}>
                <th scope="row">{index + 1}</th>
                <td>{patient.date}</td>
                <td>{patient.gender}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.weight}</td>
                <td>+01790887504</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPatients;
