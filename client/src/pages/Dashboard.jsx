import "../styles/dashboard.css";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useContext, useEffect, useState } from "react";
import { getTasks } from "../api/tasksService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        if (!token) {
          navigate("/login");
        }
        const data = await getTasks();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadTasks();
  }, [token, navigate]);

  return (
    <div className="dashboard-wrapper">
      <Header />
      <section className="welcome-section">
        <p>Hello, James 👋</p>
        <h1>Manage your daily goals</h1>
      </section>
      <TaskInput />
      <nav className="category-tabs">
        <span className="tab active">All</span>
        <span className="tab">Health</span>
        <span className="tab">Work</span>
        <span className="tab">Family</span>
        <span className="tab">Personal</span>
      </nav>
      <div className="task-list-header">
        <h3>Active Tasks</h3>
        <span className="task-count">3 Tasks</span>
      </div>
      <TaskList />
      <div className="watermark">
        <i className="fa-solid fa-circle-check"></i>
      </div>
    </div>
  );
};

export default Dashboard;
