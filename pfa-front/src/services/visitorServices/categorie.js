import axios from "axios";
const API_URL = "http://localhost:5000/category";

export const allCatgeories = async () => {
  const response = await axios.get(API_URL + "/all");

  //alert(response.data);
  return response;
};
