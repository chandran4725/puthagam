import axios from "axios";

const BASE_URL = "http://localhost:8080/api/admin/books";
const BASE_URL1 = "http://localhost:8080/api/books";

export const addBook = (formData) => {
  return axios.post(BASE_URL, formData);
};

export const getAllBooks = () => {
  return axios.get(BASE_URL1);
};
