import axios from "../../../api/axios";
import { LOGIN_URL, REGISTER_URL, RESEND_OTP_URL, VERIFY_OTP_URL } from "../../../api/constant";
import { removeSessionToken } from "../../../utils/helpers/storage";
import axiosPrivate from './../../../api/axiosPrivate';

// Authenticate user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  console.log(response.data);
  return response.data;
};

// Register user
const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData);
  console.log(response.data);
  return response.data;
};

// Verify OTP
const verifyOTP = async (OTP) => {
  let otp = { otp: OTP }
  const response = await axiosPrivate.post(VERIFY_OTP_URL, otp);
  console.log(response.data);
  return response.data;
};

// Resend OTP
const resendOTP = async (email) => {
  const response = await axiosPrivate.post(RESEND_OTP_URL, email);
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
  register,
  verifyOTP,
  resendOTP
};

export default authService;
