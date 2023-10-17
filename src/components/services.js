import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = token;
}

export const dellToken = () => {
  axios.defaults.headers.common['Authorization'] ='';
}

export const singUp = async (body) => {
  const {data} = await axios.post(`/users/signup`, body); 
  return data; 
}

export async function login(body) {
  const {data} = await axios.post(`/users/login`, body); 
  setToken(`Bearer ${data.token}`)
  return data; 
}

export const getProfile = async (token) => {
  return await axios.post(`/users/logout`, token); 
}

export async function refreshUser(token) {
  setToken(`Bearer ${token}`)
  const {data} = await axios.get(`/users/current`); 
  return data; 
}
//*********************** */

export function getContacts() {
  return axios.get('/contacts');
}

export function addContacts(text) {
  return axios.post('/contacts', text);
}

export function deleteContacts(taskId) {
  return axios.delete(`/contacts/${taskId}`);
}
