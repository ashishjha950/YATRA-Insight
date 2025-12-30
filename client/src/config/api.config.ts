import { API_URL, ENV } from '../env'

export const API_CONFIG = {
  BASE_URL: API_URL,
  TIMEOUT: 15000,
  ENV,
}

if (!API_CONFIG.BASE_URL) {
  throw new Error('API_BASE_URL is not configured')
}
