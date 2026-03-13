import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <i className="fa-solid fa-circle-check"></i>
            <span>TaskFlow</span>
          </div>
          <div className="nav-auth">
            <Link to={"/login"} className="btn-login">
              Log in
            </Link>
            <Link to={"/register"} className="btn-signup">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Master Your Day with <span className="text-blue">TaskFlow</span>
          </h1>
          <p className="hero-description">
            Stay organized, reduce stress, and boost your productivity with our
            intuitive task management tools.
          </p>
          <Link to={"/register"} className="btn-hero">
            Get Started
          </Link>
        </div>

        <div className="hero-visual">
          <div className="visual-container">
            <h2 className="visual-title">
              Everything you need to stay on track
            </h2>

            <div className="feature-card">
              <div className="card-icon">
                <i className="fa-solid fa-tags"></i>
              </div>
              <h3>Smart Categorization</h3>
              <p>
                Automatically organize your tasks by project, priority, and
                custom tags using our AI-driven engine.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="logo small">
              <i className="fa-solid fa-circle-check"></i>
              <span>TaskFlow</span>
            </div>
            <span className="divider">|</span>
            <p>The simple task management app.</p>
          </div>
          <div className="footer-right">
            <p>&copy; 2024 TaskFlow Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
