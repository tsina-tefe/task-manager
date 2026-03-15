import "../styles/dashboard.css";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
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
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadTasks();
  }, [token, navigate]);

  const loadTasks = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const data = await getTasks();
      setTasks(data.results);
    } catch (error) {
      showError("Something went wrong, try again");
    }
  };

  const handleChange = (e) => {
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
      setNewTask({
        title: "Work",
        description: "",
      });
    } catch (error) {
      showError("Failed to add task, please try again.");
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await updateStatus(id);
      loadTasks();
    } catch (error) {
      showError("Failed to update task status, please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTask(id);
      loadTasks();
    } catch (error) {
      showError("Could't delete a task, please try again.");
    }
  };

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const pages = ["all", "health", "work", "family", "personal"];

  return (
    <div className="dashboard-wrapper">
      <Header />
      <section className="welcome-section">
        <p>Hello, {user?.name || "James"} 👋</p>
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
        <span className="task-count">{tasks.length} Tasks</span>
      </div>
      <Outlet context={{ tasks, handleUpdate, handleDelete }} />
      <div className="watermark">
        <i className="fa-solid fa-circle-check"></i>
      </div>
    </div>
  );
};

export default Dashboard;
