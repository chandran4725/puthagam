import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL

const SUB_URL = BASE_URL+"/api/admin/books";
const SUB_URL1 = BASE_URL+"/api/books";
const SUB_URL2 = BASE_URL+"/api/books/"

export const addBook = (formData) => {
  return axios.post(SUB_URL, formData);
};

export const getAllBooks = () => {
  return axios.get(SUB_URL1);
};

export const getBookById = (id) => {
  return axios.get(SUB_URL2+id);
} 
