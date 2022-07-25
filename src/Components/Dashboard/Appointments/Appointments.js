import React, { useEffect, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAuth } from "../../Context/AuthContext";

const Appointments = () => {
  const [selectedDate, setSeletedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const { currentUser } = useAuth();

  const handleDateChange = (date) => {
    setSeletedDate(date);
  };
  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: selectedDate, email: currentUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [selectedDate]);

  return (
    <div
      className="row g-0 d-flex align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="col-md-5 gx-5">
        <Calendar
          onChange={handleDateChange}
          value={new Date()}
          style={{ marginLeft: "7px" }}
        />
      </div>
      <div className="col-md-5 gx-2">
        <h5 className="text-center" style={{ color: "#1cc7c1" }}>
          Appointment on {selectedDate.toDateString()}
        </h5>
        <AppointmentsByDate appointments={appointments} />
      </div>
    </div>
  );
};

export default Appointments;
