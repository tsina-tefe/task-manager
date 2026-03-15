import { useOutletContext } from "react-router-dom";
import TaskList from "./TaskList";

const PersonalTasks = () => {
  const { tasks, handleUpdate, handleDelete } = useOutletContext();
  return (
    <>
      <TaskList
        tasks={tasks.filter((task) => task.title === "Personal")}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default PersonalTasks;
