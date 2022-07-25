import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch("https://murmuring-plains-03551.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
        }
      });
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="text-center" style={{ color: "#1cc7c1" }}>
        {appointmentOn}
      </h2>
      <p className="text-center text-secondary mb-3">
        <small>ON {date.toDateString()}</small>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            {...register("name", { required: true })}
            placeholder="Enter your name"
            style={{ width: "100%" }}
          />
          {errors.name?.type === "required" && "First name is required"}
        </div>
        <div className="mb-3">
          <input
            {...register("email", { required: true })}
            placeholder="Enter your email"
            style={{ width: "100%" }}
          />
          {errors.email?.type === "required" && "Email is required"}
        </div>
        <div className="mb-3">
          <input
            {...register("phone", { required: true })}
            placeholder="Enter your phone"
            style={{ width: "100%" }}
          />
          {errors.phone?.type === "required" && "Phone is required"}
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <select
              {...register("gender")}
              style={{ width: "100%", height: "100%" }}
            >
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="col-md-4">
            <input
              type="number"
              {...register("age", { min: 18, max: 99 })}
              placeholder="Age"
            />
          </div>
          <div className="col-md-4">
            <input {...register("weight")} placeholder="Weight" />
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className="learnMore-btn">
              Send
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AppointmentForm;
