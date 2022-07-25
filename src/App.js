import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import { AuthProvider } from "./Components/Context/AuthContext";
import Appointments from "./Components/Dashboard/Appointments/Appointments";
import AddDoctor from "./Components/Dashboard/Dashboard/AddDoctor/AddDoctor";
import AllPatients from "./Components/Dashboard/Dashboard/AllPatients/AllPatients";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Prescriptions from "./Components/Dashboard/Dashboard/Prescriptions/Prescriptions";
import DashboardContainer from "./Components/Dashboard/DashboardContainer/DashboardContainer";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotMatch from "./Components/NotMatch/NotMatch";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardContainer />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointment" element={<Appointments />} />
            <Route path="patients" element={<AllPatients />} />
            <Route path="addDoctor" element={<AddDoctor />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="*" element={<NotMatch />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
