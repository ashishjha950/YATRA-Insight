import axios from 'axios'
import { getToken } from '../../shared/utils/storage'

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 15000
})

api.interceptors.request.use(async config => {
  const token = await getToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      console.log('Network error')
    }

    if (error.response?.status === 401) {
      // force logout or token refresh
    }

    return Promise.reject(error)
  }
)

export default api
