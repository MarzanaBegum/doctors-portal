import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import RecentAppointment from "./RecentAppointment";

const dashboardData = [
  {
    title: "Pending Appointments",
    background: "red",
  },
  {
    title: "Today's Appointments",
    background: "blue",
  },
  {
    title: "Total Appointments",
    background: "green",
  },
  {
    title: "Total patients",
    background: "orange",
  },
];

const Dashboard = () => {
  const [recentAppointment, setRecentAppointment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => {
        setRecentAppointment(data);
      });
  }, [recentAppointment]);

  return (
    <div className="row g-0 ms-3">
      <h3 className="mb-4 mt-2" style={{ color: "#1cc7c1" }}>
        Dashboard
      </h3>
      {dashboardData.map((item) => (
        <div className="col-md-3" key={item.title}>
          <DashboardCard item={item} />
        </div>
      ))}

      <div className="col-md-11">
        <h4 className="mt-5 mb-4" style={{ color: "#1cc7c1" }}>
          Recent Appointment
        </h4>
        <RecentAppointment recentAppointment={recentAppointment} />
      </div>
    </div>
  );
};

export default Dashboard;
