import React from "react";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <div>
      {appointments.length ? (
        <table className="table table-borderless w-100">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <th scope="row">{index + 1}</th>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Visited
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h4>No Appointments</h4>
        </div>
      )}
    </div>
  );
};

export default AppointmentsByDate;
