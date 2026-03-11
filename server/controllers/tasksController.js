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

// update tasks by task id
export const updateTaskStatus = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.user.id;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "Please include the task id" });
  }

  const queryUpdate = `
    UPDATE tasks
    SET status = IF(status = 'pending', 'completed', 'pending')
    WHERE id = ? AND user_id = ?
  `;

  db.query(queryUpdate, [id, userId], (error, result) => {
    if (error) {
      console.log("Error updating: ", error);
      return res
        .status(500)
        .json({ message: "Something went wrong, try again later" });
    }

    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Task does not exist" });
    }

    res.status(200).json({ message: "Task updated successfully" });
  });
};

// remove task by task id
export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.user.id;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "Please include valid task id" });
  }

  const queryDelete = `
    DELETE FROM tasks
    WHERE id = ? AND user_id = ?
  `;

  db.query(queryDelete, [id, userId], (error, result) => {
    if (error) {
      console.log("Error Deleting: ", error);
      return res
        .status(500)
        .json({ message: "Something went wrong, try again later" });
    }
    console.log(result.affectedRows);
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Task does not exist" });
    }

    res.status(200).json({ message: "Task removed successfully" });
  });
};
