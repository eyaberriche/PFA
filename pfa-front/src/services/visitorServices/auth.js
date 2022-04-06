// login & register & logout & get currentUser
import axios from "axios";
const API_URL = "http://localhost:5000/";
export const register = (data) => {
  return axios.post(API_URL + "register", {
    data,
  });
};
export const login = async (data) => {
  const response = await axios.post(API_URL + "login", data);
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  //alert(response.data);
  return response.data;
};
export const logout = () => {
  localStorage.removeItem("user");
};
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
// eslint-disable-next-line import/no-anonymous-default-export
