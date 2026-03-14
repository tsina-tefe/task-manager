import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PersonalTasks from "./components/PersonalTasks.jsx";
import AllTasks from "./components/AllTasks.jsx";
import WorkTasks from "./components/WorkTasks.jsx";
import FamilyTasks from "./components/FamilyTasks.jsx";
import HealthTasks from "./components/HealthTasks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />, //if no token, direct to login
    children: [
      {
        path: "/dashboard/all",
        element: <AllTasks />,
      },
      {
        path: "/dashboard/personal",
        element: <PersonalTasks />,
      },
      {
        path: "/dashboard/work",
        element: <WorkTasks />,
      },
      {
        path: "/dashboard/family",
        element: <FamilyTasks />,
      },
      {
        path: "/dashboard/health",
        element: <HealthTasks />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
