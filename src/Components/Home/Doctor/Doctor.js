import React from "react";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      {doctor?.img ? (
        <img
          src={`data:image/png;base64,${doctor.img.image}`}
          style={{ width: "100px", height: "100px" }}
          alt="doctorPic"
          className="img-fluid"
        />
      ) : (
        <img
          src={`http://localhost:5000/${doctor.image}`}
          style={{ width: "100px", height: "100px" }}
          alt="doctorPic"
          className="img-fluid"
        />
      )}

      <div className="mt-2">
        <h6>Dr.{doctor.name}</h6>
        <p>
          <FontAwesomeIcon icon={faPhoneFlip} /> +61450300478
        </p>
      </div>
    </div>
  );
};

export default Doctor;
