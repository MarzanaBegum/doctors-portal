import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact my-5 py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h5>Contact Us</h5>
          <h1>Always connect with us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form action="">
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="email"
              />
            </div>
            <div className="mb-2">
              <input
                type="subject"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="subject"
              />
            </div>
            <div className="mb-2">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button type="button" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
