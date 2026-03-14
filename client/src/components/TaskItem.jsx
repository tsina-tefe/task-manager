import { useState } from "react";

const TaskItem = ({ task, handleUpdate }) => {
  const [isCompleted, setIsCompleted] = useState(task.status === "completed");

  return (
    <div className={isCompleted ? "task-item task-completed" : "task-item"}>
      <i
        className={
          isCompleted
            ? "fa-solid fa-circle-check text-success fa-xl completed"
            : "fa-regular fa-circle fa-xl check"
        }
        onClick={() => {
          handleUpdate(task.id);
          setIsCompleted(!isCompleted);
        }}
      ></i>
      <div className="task-info">
        <h4 className="task-desc">{task.description}</h4>
        <p>{task.title} • 08:00 AM</p>
      </div>
      <i
        className="fa-regular fa-trash-can delete-icon"
        onClick={() => {
          console.log("delete clicked");
        }}
      ></i>
    </div>
  );
};

export default TaskItem;
