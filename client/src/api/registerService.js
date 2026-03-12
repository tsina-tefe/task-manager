import api from "./api";

const register = async (userDetails) => {
  try {
    const response = await api.post("/register", userDetails);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default register;
