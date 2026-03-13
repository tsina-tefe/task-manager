const TaskItem = () => {
  return (
    <div className="task-item">
      <div className="task-check"></div>
      <div className="task-info">
        <h4>Morning workout & yoga</h4>
        <p>Health • 08:00 AM</p>
      </div>
      <i className="fa-regular fa-trash-can delete-icon"></i>
    </div>
  );
};

export default TaskItem;
