import api from "./api";

const handleLogin = async (userDetails) => {
  try {
    const response = await api.post("/api/login", userDetails);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export default handleLogin;
