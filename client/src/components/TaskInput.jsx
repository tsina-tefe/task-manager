const TaskInput = () => {
  return (
    <div className="add-task-card">
      <label>ADD NEW TASK</label>
      <input type="text" placeholder="What needs to be done?" />
      <div className="add-task-footer">
        <select>
          <option>Work</option>
          <option>Health</option>
          <option>Family</option>
          <option>Personal</option>
        </select>
        <button className="btn-add">
          <i className="fa-solid fa-plus"></i> Add
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
