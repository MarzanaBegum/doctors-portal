import React from "react";
import chair from "../../../../src/images/chair.png";

const HeaderMain = () => {
  return (
    <main
      className="row g-0 d-flex align-items-center"
      style={{ height: "600px" }}
    >
      <div className="col-md-4 col-sm-5  offset-md-1 me-3">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile
          <br />
          Starts Here
        </h1>
        <p style={{ color: "gray" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button type="button" className="btn btn-info">
          GET APPOINTMENT
        </button>
      </div>
      <div className="col-md-6 col-sm-5 ">
        <img src={chair} alt="chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
