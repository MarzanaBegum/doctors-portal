import React from "react";
import doctorSmall from "../../../images/doctor-small.png";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctor = () => {
  return (
    <div className="col-md-4 text-center">
      <img src={doctorSmall} alt="doctorPic" className="img-fluid" />
      <div className="mt-2">
        <h6>Dr.Mahbuba</h6>
        <p>
          <FontAwesomeIcon icon={faPhoneFlip} /> +61450300478
        </p>
      </div>
    </div>
  );
};

export default Doctor;
