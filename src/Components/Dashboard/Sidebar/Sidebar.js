import {
  faCalendar,
  faFileLines,
  faGear,
  faGrip,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../Context/AuthContext";

const Sidebar = () => {
  const { currentUser } = useAuth();
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isDoctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: currentUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsDoctor(data);
      });
  }, [currentUser.email]);

  return (
    <nav className="navbar navbar-expand-lg text-white navbar-container">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="mt-5 ms-3" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <Link to="dashboard" className="linkStyle">
              <li className="nav-item mb-4">
                <FontAwesomeIcon icon={faGrip} />
                <span className="dashboard">Dashboard</span>
              </li>
            </Link>

            {isDoctor && (
              <div>
                <Link to="appointment" className="linkStyle">
                  <li className="nav-item mb-4">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="appointment">Appointment</span>
                  </li>
                </Link>
                <Link to="patients" className="linkStyle">
                  <li className="nav-item mb-4">
                    <FontAwesomeIcon icon={faUserGroup} />
                    <span className="patients">Patients</span>
                  </li>
                </Link>
                <Link to="addDoctor" className="linkStyle">
                  <li className="nav-item mb-4">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span className="patients">Add Doctors</span>
                  </li>
                </Link>
                <Link to="prescriptions" className="linkStyle">
                  <li className="nav-item mb-4">
                    <FontAwesomeIcon icon={faFileLines} />
                    <span className="prescription">Prescription</span>
                  </li>
                </Link>
                <Link to="setting" className="linkStyle">
                  <li className="nav-item mb-4">
                    <FontAwesomeIcon icon={faGear} />
                    <span className="setting"> Setting</span>
                  </li>
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
