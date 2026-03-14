import "../styles/dashboard.css";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useContext, useEffect, useState } from "react";
import {
  getTasks,
  addTask,
  updateStatus,
  deleteTask,
} from "../api/tasksService";
import { AuthContext } from "../context/AuthContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "Work",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const loadTasks = async () => {
    try {
      if (!token) {
        navigate("/login");
      }
      const data = await getTasks();
      setTasks(data.results);
    } catch (error) {
      setError(error.message); // show user error message
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [token, navigate]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
    setError("");
  };

  const handleAddTask = async () => {
    try {
      const response = await addTask(newTask);
      setMessage(response.message);
      setTimeout(() => {
        setMessage("");
      }, 4000);
      loadTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await updateStatus(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTask(id);
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const pages = ["all", "health", "work", "family", "personal"];

  return (
    <div className="dashboard-wrapper">
      <Header />
      <section className="welcome-section">
        <p>Hello, James 👋</p>
        <h1>Manage your daily goals</h1>
      </section>
      <TaskInput
        handleChange={handleChange}
        newTask={newTask}
        handleAddTask={handleAddTask}
        message={message}
        error={error}
      />
      <nav className="category-tabs">
        {pages.map((page) => (
          <NavLink
            className={({ isActive }) => {
              return isActive ? "tab active capitalize" : "tab capitalize";
            }}
            key={page}
            to={`/dashboard/${page}`}
          >
            {page}
          </NavLink>
        ))}
      </nav>
      <div className="task-list-header">
        <h3>Active Tasks</h3>
        <span className="task-count">3 Tasks</span>
      </div>
      <Outlet context={{ tasks, handleUpdate, handleDelete }} />
      <div className="watermark">
        <i className="fa-solid fa-circle-check"></i>
      </div>
    </div>
  );
};

export default Dashboard;
