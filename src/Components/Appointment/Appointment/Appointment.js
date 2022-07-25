import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookingAppointment from "../BookingAppointment.js/BookingAppointment";

const Appointment = () => {
  const [selectedDate, setSeletedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSeletedDate(date);
  };
  return (
    <div>
      <Navbar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookingAppointment date={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
