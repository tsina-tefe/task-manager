import db from "../db.js";

// Add new task
export const addTask = (req, res) => {
  const userId = req.user.id;
  const title = req.body.title.trim();
  const description = req.body.description.trim();

  if (!title || !description) {
    return res.status(400).json({ message: "Fill all of the fields" });
  }

  const insertTask = `
        INSERT INTO tasks(title, description, user_id)
        VALUES (?, ?, ?)
    `;

  db.query(insertTask, [title, description, userId], (error) => {
    if (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong, try again later" });
    }

    res.status(201).json({ message: "Task added successfully" });
  });
};

// get tasks by userId
export const getTasks = (req, res) => {
  const userId = req.user.id;

  const querySelect = `
    SELECT id, title, description, status FROM tasks
    WHERE user_id = ?
  `;

  db.query(querySelect, [userId], (error, results) => {
    if (error) {
      console.log("Error getting tasks: ", error);
      return res
        .status(500)
        .json({ message: "Something went wrong, try again later" });
    }

    res.status(200).json({ results });
  });
};
