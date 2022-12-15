import axios from "../../../api/axios";
import { LOGIN_URL } from "../../../api/constant";
import { removeSessionToken } from "../../../utils/helpers/storage";

// Authenticate user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  console.log(response.data);
  return response.data;
};

// Logout user
const logout = async () => {
  removeSessionToken("accessToken");
};

const authService = {
  login,
  logout,
};

export default authService;
