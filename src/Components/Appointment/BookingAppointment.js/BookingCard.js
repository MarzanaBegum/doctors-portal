import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 text-center mb-5">
      <div className="card" style={{ border: "none" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#1cc7c1" }}>
            {booking.name}
          </h5>
          <p className="card-text mb-0">{booking.time}</p>
          <small className="card-text text-muted">
            {booking.space} SPACES AVAILABLE
          </small>
          <button onClick={openModal} className="learnMore-btn">
            Booking Appointment
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentOn={booking.name}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
