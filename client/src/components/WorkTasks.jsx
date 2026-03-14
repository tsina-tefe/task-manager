import TaskList from "./TaskList";
import { useOutletContext } from "react-router-dom";

const WorkTasks = () => {
  const { tasks, handleUpdate, handleDelete } = useOutletContext();
  return (
    <>
      <TaskList
        tasks={tasks}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default WorkTasks;
