import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleUpdate }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} handleUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default TaskList;
