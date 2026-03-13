import api from "./api";

export const getTasks = async () => {
  try {
    console.log("inside getTasks");
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
