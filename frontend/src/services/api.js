import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// Function to fetch users from the API
export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

// Function to fetch products from the API
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};