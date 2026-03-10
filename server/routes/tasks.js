import express from "express";
import authenticateToken from "../middleware/authenticateToken.js";
import { addTask } from "../controllers/tasksController.js";

const router = express.Router();

// add new task
router.post("/", authenticateToken, addTask);

// // get tasks
// router.get("/:userId", getTasks);

// // update task
// router.put("/:id", updateTask);

// // delete task
// router.delete("/:id", deleteTask);

export default router;
