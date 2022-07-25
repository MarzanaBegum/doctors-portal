import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../images/login.png";
import { useAuth } from "../Context/AuthContext";

const Signup = () => {
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    if (data.password !== data.passwordConfirm) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(data.email, data.password, data.name);
      navigate(from, { replace: true });
    } catch (error) {
      setError("Failed to create an account!");
    }
    setLoading(false);
  }
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "93vh" }}
    >
      <div className="row g-0">
        <div className="col-md-6 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-5" style={{ color: "purple" }}>
              Sign Up
            </h3>
            {error && (
              <div className="alert alert-warning" role="alert">
                {error}
              </div>
            )}
            <div className="mb-3">
              <input
                {...register("name", { required: true })}
                placeholder="Enter username"
                style={{ width: "100%" }}
              />
              {errors.name?.type === "required" && "User name is required"}
            </div>
            <div className="mb-3">
              <input
                {...register("email", { required: true })}
                placeholder="Enter your Email"
                style={{ width: "100%" }}
              />
              {errors.email?.type === "required" && "Email is required"}
            </div>
            <div className="mb-3">
              <input
                {...register("password", { required: true })}
                placeholder="Enter your password"
                style={{ width: "100%" }}
              />
              {errors.password?.type === "required" && "Password is required"}
            </div>
            <div className="mb-3">
              <input
                {...register("passwordConfirm", { required: true })}
                placeholder="Password Confirm"
                style={{ width: "100%" }}
              />
              {errors.passwordConfirm?.type === "required" &&
                "Password is required"}
            </div>
            <button
              disabled={loading}
              className="learnMore-btn mt-3"
              style={{ width: "100%" }}
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="col-md-5">
          <img className="img-fluid" src={login} alt="loginImage" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
