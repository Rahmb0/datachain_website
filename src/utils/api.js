import axios from 'axios';

// Create axios instance with security defaults
const secureApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

// Request interceptor
secureApi.interceptors.request.use(
  (config) => {
    // Add CSRF token if available
    const token = document.querySelector('meta[name="csrf-token"]')?.content;
    if (token) {
      config.headers['X-CSRF-Token'] = token;
    }
    
    // Sanitize request data
    if (config.data) {
      config.data = sanitizeRequestData(config.data);
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
secureApi.interceptors.response.use(
  (response) => {
    // Validate response data
    if (response.data) {
      response.data = validateResponseData(response.data);
    }
    return response;
  },
  (error) => {
    // Handle specific error cases
    if (error.response?.status === 429) {
      // Rate limit exceeded
      console.error('Rate limit exceeded. Please try again later.');
    }
    return Promise.reject(error);
  }
);

// Data sanitization utility
const sanitizeRequestData = (data) => {
  if (typeof data === 'object') {
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = sanitizeInput(data[key]);
      return acc;
    }, {});
  }
  return sanitizeInput(data);
};

// Response data validation
const validateResponseData = (data) => {
  // Add validation logic here
  return data;
};

export default secureApi; 