import axios from "../../../api/axios";
import { LOGIN_URL } from "../../../api/constant";



// Authenticate user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  console.log(response.data);
  return response.data;
};

const authService = {
  login,
};

export default authService;
