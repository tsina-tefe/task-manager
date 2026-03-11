import express from "express";
import authenticateToken from "../middleware/authenticateToken.js";
import {
  addTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/tasksController.js";

const router = express.Router();

// add new task
router.post("/", authenticateToken, addTask);

// get tasks
router.get("/", authenticateToken, getTasks);

// update task
router.put("/", authenticateToken, updateTaskStatus);

// // delete task
// router.delete("/:id", deleteTask);

export default router;
