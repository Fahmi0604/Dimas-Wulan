import axios from "axios";

// const API_URL = 'https://api.dreamyweddingbliss.my.id/api' + "/greeting";
const API_URL = 'http://localhost:60400/api' + "/greeting";

const createGreeting = (data) => {
  return axios.post(API_URL + "/", data, { headers: { 'Content-Type': 'application/json' } });
};

const getAllGreeting = () => {
  return axios.get(API_URL + "/", { headers: { 'Content-Type': 'application/json' } });
};

const getGreetingByUserId = (id) => {
  return axios.get(API_URL + `/${id}`, { headers: { 'Content-Type': 'application/json' } });
};

const deleteGreeting = (data) => {
  return axios.delete(API_URL + "/", { headers: { 'Content-Type': 'application/json' }, data });
};

const greetingService = {
  createGreeting,
  getAllGreeting,
  getGreetingByUserId,
  deleteGreeting
};

export default greetingService;
