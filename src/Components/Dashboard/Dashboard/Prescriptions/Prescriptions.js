import React, { useEffect, useState } from "react";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => {
        setPrescriptions(data);
      });
  }, [prescriptions]);

  return (
    <div
      className="row container d-flex align-items-center"
      style={{ height: "60vh" }}
    >
      <div className="col-md-11">
        <h4 className="mt-4 mb-5" style={{ color: "#1cc7c1" }}>
          All Prescriptions
        </h4>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Prescriptions</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription, index) => (
              <tr key={prescription._id}>
                <th scope="row">{index + 1}</th>
                <td>{prescription.date}</td>
                <td>{prescription.name}</td>
                <td>+01790887504</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prescriptions;
