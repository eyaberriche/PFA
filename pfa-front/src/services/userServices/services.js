import axios from "axios";
const API_COS = "http://localhost:5000/customer/service";
const API_FRE = "http://localhost:5000/freelancer/service";
// customer
export const createService = async (freelancer, service) => {
  const res = await axios.post(
    API_COS + "/create",
    {
      freelancer: freelancer,
      name: service.name,
      creationDate: service.creationDate,
      finalDate: service.finalDate,
      price: service.price,
      description: service.description,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return res.data.service;
};

export const updateService = async (id, service) => {
  const res = await axios.put(
    API_COS + `/update/${id}`,
    {
      name: service.name,
      creationDate: service.creationDate,
      finalDate: service.finalDate,
      price: service.price,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return res.data.service;
};
export const deleteService = async (id) => {
  const res = await axios.delete(API_COS + `/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data.service;
};

export const getRequestedServices = async () => {
  const result = await axios.get(API_COS + `/requested`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return result.services;
};
//freelancer
export const getTodoServices = async () => {
  const result = await axios.get(API_FRE + `/todo`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return result.services;
};
export const confirmService = async (id) => {
  const res = await axios.put(
    API_FRE + `/confirm/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return res.data.service;
};
