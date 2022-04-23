import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Info.css";

const Info = ({ info }) => {
  return (
    <div className="col-md-4 text-white">
      <div
        className={`d-flex justify-content-center align-items-center info-container info-${info.background}`}
      >
        <div className="info-icon">
          <FontAwesomeIcon icon={info.icon} />
        </div>
        <div>
          <h5>{info.title}</h5>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default Info;
