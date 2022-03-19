// login & register & logout & get currentUser
import axios from "axios";
const API_URL = "http://localhost:5000/";
const register = (data) => {
  return axios.post(API_URL + "register", {
    data,
  });
};
const login = async (data) => {
  const response = await axios.post(API_URL + "login", data);
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
