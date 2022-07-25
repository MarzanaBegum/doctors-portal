import React from "react";

const RecentAppointment = ({ recentAppointment }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Prescription</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {recentAppointment.map((appointment, index) => (
          <tr key={appointment._id}>
            <th scope="row">{index + 1}</th>
            <td>{appointment.date}</td>
            <td>{appointment.created}</td>
            <td>{appointment.name}</td>
            <td>+01790887504</td>
            <td>
              <button type="button" className="btn btn-primary">
                View
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-primary">
                Pending
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentAppointment;
