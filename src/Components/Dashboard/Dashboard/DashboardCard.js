import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ item }) => {
  return (
    <div
      className={`card card-item-${item.background}`}
      style={{ margin: "4px" }}
    >
      <div className="row g-0 d-flex align-items-center justify-content-center">
        <div className="col-md-2">
          <h3>09</h3>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
