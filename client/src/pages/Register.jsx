import { useState } from "react";
import Name from "../components/Name";
import Email from "../components/Email";
import Password from "../components/Password";
import register from "../api/registerService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import zxcvbn from "zxcvbn";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all the fields.");
      return;
    }

    if (!validator.isEmail(formData.email)) {
      setError("Invalid Email");
      return;
    }

    if (formData.password.length <= 8) {
      setError("Password should be greater than 8 characters.");
      return;
    }

    //check password strength
    const result = zxcvbn(formData.password);
    if (result < 2) {
      setError(
        "Password is not strong, please include letters, numbers and characters.",
      );
      return;
    }

    setLoading(true);
    try {
      const res = await register(formData);
      setMessage(res.message);
      setTimeout(() => {
        setMessage("");
        navigate("/login");
      }, 3000);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong");
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Link to={"/"} className="logo">
            <div className="logo-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </Link>
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
              e.preventDefault();
              setError("");
              handleRegister();
            }}
          >
            {loading ? "Registering " : "Create Account "}{" "}
            <i className="fa-solid fa-arrow-right"></i>
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
