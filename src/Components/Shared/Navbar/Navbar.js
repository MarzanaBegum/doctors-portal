import React from "react";

const Navabar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active me-3"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="/patients">
                Patients
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="/dashboard">
                Doctors Dashboard
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link text-white" href="/admin">
                Admin
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link text-white" href="/blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-3" href="/contactUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
