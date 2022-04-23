import React from "react";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
  return (
    <div
      class="card shadow text-center m-3 testimonial"
      style={{ maxWidth: " 100%" }}
    >
      <div class="card-body">
        <p class="card-text">{testimonial.quote}</p>
      </div>
      <div class="card-footer d-flex align-items-center">
        <img className="mx-2" src={testimonial.img} alt="people" width="60" />
        <div>
          <p className="name">{testimonial.name}</p>
          <small>{testimonial.from}</small>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
