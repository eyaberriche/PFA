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

  return res.data.token;
};
export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = async () => {
  try {
    const res = await axios.get(API_URL + "currentUser", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.user;
  } catch (error) {
    return null;
  }
};
// eslint-disable-next-line import/no-anonymous-default-export
