import axios from 'axios';
import { API_CONFIG } from '../config/api.config';
import { getAdminToken } from '../utils/adminSecureStorage';
import { getToken } from '../utils/secureStorage';

const adminApi = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Check BOTH admin and user storage
adminApi.interceptors.request.use(
  async (config) => {
    // ✅ Try admin token first
    let token = await getAdminToken();
    
    // ✅ If no admin token, try regular user token
    if (!token) {
      token = await getToken();
    }
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log('🔐 Admin API Request:', {
      url: config.url,
      method: config.method,
      hasToken: !!token,
      tokenPreview: token ? `${token.substring(0, 20)}...` : 'none',
    });
    
    return config;
  },
  (error) => {
    console.error('❌ Admin Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
adminApi.interceptors.response.use(
  (response) => {
    console.log('✅ Admin API Response:', {
      url: response.config.url,
      status: response.status,
    });
    return response.data;
  },
  (error) => {
    console.error('❌ Admin API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });

    const message =
      error?.response?.data?.message ||
      error.message ||
      'Unexpected error';

    return Promise.reject(message);
  }
);

export default adminApi;