import { useState } from "react";

const TaskItem = ({ task, handleUpdate, handleDelete }) => {
  const isCompleted = task.status === "completed";

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
        }}
      ></i>
      <div className="task-info">
        <h4 className="task-desc">{task.description}</h4>
        <p>• {task.title}</p>
      </div>
      <i
        className="fa-regular fa-trash-can delete-icon"
        onClick={() => {
          handleDelete(task.id);
        }}
      ></i>
    </div>
  );
};

export default TaskItem;
