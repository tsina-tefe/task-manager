import { useOutletContext } from "react-router-dom";
import TaskList from "./TaskList";

const FamilyTasks = () => {
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

export default FamilyTasks;
