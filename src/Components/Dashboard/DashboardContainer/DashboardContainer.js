import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const DashboardContainer = () => {
  return (
    <div className="row g-0">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardContainer;
