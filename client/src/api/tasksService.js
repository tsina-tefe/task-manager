import api from "./api";

const handleError = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    return new Error(error.response.data.message);
  }
  return new Error("Something went wrong, try again.");
};

export const getTasks = async () => {
  try {
    const response = await api.get("/api/tasks");
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const addTask = async (newTask) => {
  try {
    const response = await api.post("/api/tasks", newTask);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const updateStatus = async (id) => {
  try {
    const response = await api.patch(`/api/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/api/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};
