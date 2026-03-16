import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import register from "./routes/register.js";
import login from "./routes/login.js";
import tasks from "./routes/tasks.js";

dotenv.config();
const PORT = process.env.PORT || 10000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));

app.use("/api/register", register);

app.use("/api/login", login);

app.use("/api/tasks", tasks);

app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is running on port ", PORT);
});
