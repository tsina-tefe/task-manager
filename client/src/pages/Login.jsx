import { useContext, useState } from "react";
import Email from "../components/Email";
import Password from "../components/Password";
import handleLogin from "../api/loginService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await handleLogin(formData);
      setMessage(res.message);
      setTimeout(() => {
        setMessage("");
      }, 5000);
      login(res.token, res.user);
      navigate("/dashboard");
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
          <h1>Wellcome to TaskFlow</h1>
          <p>Manage your projects efficiently</p>
        </div>
        {error ? <p className="error">{error}</p> : ""}
        {message ? <p className="success">{message}</p> : ""}
        <form className="auth-form">
          <Email handleChange={handleChange} value={formData.email} />
          <Password handleChange={handleChange} value={formData.password} />

          <button
            type="submit"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setError("");
              handleSubmit(); //Login
            }}
          >
            Sign In <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
        <div className="auth-footer">
          Don't have an account? <Link to={"/register"}>Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
