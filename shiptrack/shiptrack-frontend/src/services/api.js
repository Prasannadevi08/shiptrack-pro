import axios from "axios";

const API = "http://localhost:8080";

// 🔐 AUTH APIs
export const loginUser = (data) =>
  axios.post(`${API}/auth/login`, data);

export const registerUser = (data) =>
  axios.post(`${API}/auth/register`, data);

// 📦 SHIPMENT APIs
export const addShipment = (data) =>
  axios.post(`${API}/shipments/addshipment`, data);

export const trackShipment = (id) =>
  axios.get(`${API}/shipments/track/${id}`);

// ✅ NEW: UPDATE SHIPMENT (VERY IMPORTANT)
export const updateShipment = (id, data) =>
  axios.put(`${API}/shipments/updateshipment/${id}`, data);

// 📊 DASHBOARD API
export const getDashboard = () =>
  axios.get(`${API}/shipments/dashboard`);