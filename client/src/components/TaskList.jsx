import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleUpdate, handleDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
