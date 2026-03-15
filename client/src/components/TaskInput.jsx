const TaskInput = ({
  handleChange,
  newTask,
  handleAddTask,
  message,
  error,
}) => {
  return (
    <form className="add-task-card">
      <label>ADD NEW TASK</label>
      <input
        type="text"
        name="description"
        value={newTask.description || ""}
        placeholder="What needs to be done?"
        onChange={handleChange}
      />
      <div className="add-task-footer">
        <select name="title" value={newTask.title} onChange={handleChange}>
          <option>Work</option>
          <option>Health</option>
          <option>Family</option>
          <option>Personal</option>
        </select>
        {error ? <p className="error">{error}</p> : ""}
        {message ? <p className="success">{message}</p> : ""}
        <button
          className="btn-add"
          onClick={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        >
          <i className="fa-solid fa-plus"></i> Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
