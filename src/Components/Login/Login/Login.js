import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../images/login.png";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      setError("");
      setLoading(true);
      await login(data.email, data.password);
      navigate(from, { replace: true });
    } catch (error) {
      setError("Failed to login!");
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
              Login
            </h3>
            {error && (
              <div className="alert alert-warning" role="alert">
                {error}
              </div>
            )}
            <div className="mb-3">
              <input
                {...register("email", { required: true })}
                placeholder="Enter your email"
                style={{ width: "100%" }}
              />
              {errors.name?.type === "required" && "Email is required"}
            </div>
            <div className="mb-3">
              <input
                {...register("password", { required: true })}
                placeholder="Enter your password"
                style={{ width: "100%" }}
              />
              {errors.password?.type === "required" && "Password is required"}
            </div>
            <Link to="/forgotPassword">Forgot Your Password?</Link>
            <button
              disabled={loading}
              className="learnMore-btn mt-3"
              style={{ width: "100%" }}
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="text-center">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <div className="col-md-5">
          <img className="img-fluid" src={loginImage} alt="loginImage" />
        </div>
      </div>
    </div>
  );
};

export default Login;
