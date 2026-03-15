import express from "express";
import authenticateToken from "../middleware/authenticateToken.js";
import {
  addTask,
  getTasks,
  updateTaskStatus,
  deleteTask,
} from "../controllers/tasksController.js";

const router = express.Router();

// add new task
router.post("/", authenticateToken, addTask);

// get tasks
router.get("/", authenticateToken, getTasks);

// update task
router.patch("/:id", authenticateToken, updateTaskStatus);

// delete task
router.delete("/:id", authenticateToken, deleteTask);

export default router;
