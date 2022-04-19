import axios from "axios";
const API_URL = "http://localhost:5000/category";

export const allCatgeories = async () => {
  const response = await axios.get(API_URL + "/all");

  return response.data;
};
///category/freelancers/:id

export const allFreelancersBycateg = async (id) => {
  const response = await axios.get(API_URL + `/freelancers/${id}`);

  return response.data;
};
//category by id

export const categoryByid = async (id) => {
  const response = await axios.get(API_URL + `/${id}`);

  return response.data[0];
};
