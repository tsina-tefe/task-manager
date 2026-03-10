import db from "../db.js";

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
