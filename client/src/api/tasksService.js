import api from "./api";

export const getTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};

export const addTask = async (newTask) => {
  try {
    const response = await api.post("/tasks", newTask);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStatus = async (id) => {
  try {
    const response = await api.put(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
