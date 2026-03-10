import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import register from "./routes/register.js";
import login from "./routes/login.js";
import tasks from "./routes/tasks.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/register", register);

app.use("/api/login", login);

app.use("/api/tasks", tasks);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
