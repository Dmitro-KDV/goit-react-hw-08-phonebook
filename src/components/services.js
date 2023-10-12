import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const url = 'https://connections-api.herokuapp.com';


const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = token;
}

export const dellToken = () => {
  axios.defaults.headers.common['Authorization'] =''
}

export const singUp = async (body) => {
    return await axios.post(`/users/signup`, body); 
}

export function login(body) {
  const {data} = axios.post(`/users/login`, body); 
  setToken(`Bearer ${data.token}`)
  return data; 

}

export const getProfile = async () => {
  return await axios.get(`/users/current`); 
}

//*********************** */

export function getContacts() {
  return axios.get(url);
}

export function addContacts(text) {
  return axios.post(url, { name: text.name, phone: text.number });
}

export function deleteContacts(taskId) {
  return axios.delete(`/${taskId}`);
}
