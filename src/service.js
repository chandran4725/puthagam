import axios from "axios";

const BASE_URL = import.meta.env.VITE_LOCAL_URL

const SUB_URL = BASE_URL+"/api/admin/books";
const SUB_URL1 = BASE_URL+"/api/books";
const SUB_URL2 = BASE_URL+"/api/books/"
const SUB_URL3 = BASE_URL+"/api/orders";

export const addBook = (formData) => {
  return axios.post(SUB_URL, formData);
};

export const getAllBooks = () => {
  return axios.get(SUB_URL1);
};

export const getBookById = (id) => {
  return axios.get(SUB_URL2+id);
} 

export const orderBook = (orderDetails) => {
  return axios.post(SUB_URL3,orderDetails,{
    headers:{
      "Content-Type" : "application/json"
    }
  });
}
