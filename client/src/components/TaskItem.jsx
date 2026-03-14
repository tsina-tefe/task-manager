const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <div className="task-check"></div>
      <div className="task-info">
        <h4>{task.description}</h4>
        <p>{task.title} • 08:00 AM</p>
      </div>
      <i
        className="fa-regular fa-trash-can delete-icon"
        onClick={() => {
          handleDelete(task.id);
          console.log("delete clicked");
        }}
      ></i>
    </div>
  );
};

export default TaskItem;
