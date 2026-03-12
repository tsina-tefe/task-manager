import { useState } from "react";
import Name from "../components/Name";
import Email from "../components/Email";
import Password from "../components/Password";
import register from "../api/registerService";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await register(formData);
      setMessage(res.message);
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo-icon">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h1>Join TaskFlow</h1>
          <p>Start managing your projects today</p>
        </div>
        {error ? <p className="error">{error}</p> : ""}
        {message ? <p className="success">{message}</p> : ""}
        <form className="auth-form">
          <Name handleChange={handleChange} value={formData.name} />
          <Email handleChange={handleChange} value={formData.email} />
          <Password handleChange={handleChange} value={formData.password} />

          <button
            type="submit"
            className="btn-primary"
            onClick={(e) => {
              console.log("submitted");
              e.preventDefault();
              setError("");
              handleRegister();
            }}
          >
            Create Account <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
        <div className="auth-footer">
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
