// login & register & logout & get currentUser
import axios from "axios";
const API_URL = "http://localhost:5000/";
export const register = (data) => {
  return axios.post(API_URL + "register", {
    data,
  });
};
export const login = async (email, password) => {
  const res = await axios.post(
    API_URL + "login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }
  );
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", res.data.user);
  console.log(res.data.token);
  console.log(res.data.user);
  return res.data.token;
};
export const logout = () => {
  localStorage.removeItem("user");
};
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
// eslint-disable-next-line import/no-anonymous-default-export
