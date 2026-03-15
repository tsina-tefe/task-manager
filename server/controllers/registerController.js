import bcrypt from "bcrypt";
import db from "../db.js";
import validator from "validator";

const registerUser = async (req, res) => {
  const name = req.body.name.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid Email" });
  }

  if (password.length <= 8) {
    return res
      .status(400)
      .json({ message: "Password should be greater than 8 characters." });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const insertUser = `
    INSERT INTO users(name, email, password)
    VALUES (?, ?, ?)
  `;

  db.query(insertUser, [name, email, hashedPass], (error) => {
    if (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Email already in use" });
      }

      return res
        .status(500)
        .json({ message: "Something went wrong, try again later" });
    }

    return res.status(201).json({ message: "Account created successfully" });
  });
};

export default registerUser;
