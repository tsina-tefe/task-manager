import { useOutletContext } from "react-router-dom";
import TaskList from "./TaskList";

const FamilyTasks = () => {
  const { tasks, handleUpdate, handleDelete } = useOutletContext();
  return (
    <>
      <TaskList
        tasks={tasks.filter((task) => task.title === "Family")}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default FamilyTasks;
