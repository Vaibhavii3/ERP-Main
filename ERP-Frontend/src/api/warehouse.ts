import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/api/v1/warehouse"; 

// Create a new warehouse
export const addWarehouse = async (data: object) => {
  const response = await axios.post(`${API_BASE_URL}/warehouse`, data);
  return response.data;
};

// Update a warehouse by ID
export const updateWarehouse = async (id: string, data: object) => {
  const response = await axios.put(`${API_BASE_URL}/warehouse/${id}`, data);
  return response.data;
};

// Delete a warehouse by ID
export const deleteWarehouse = async (id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/warehouse/${id}`);
  return response.data;
};

// Get a specific warehouse by ID
export const getWarehouseById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/warehouse/${id}`);
  return response.data;
};

// Get a list of all warehouses
export const listWarehouses = async () => {
  const response = await axios.get(`${API_BASE_URL}/warehouses`);
  return response.data;
};
