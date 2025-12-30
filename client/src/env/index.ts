export const ENV = process.env.EXPO_ENV || 'development'

export const API_URL = process.env.EXPO_API_URL!
export const DB_API = process.env.EXPO_DB_API!

export const GOOGLE_MAPS_KEY = process.env.EXPO_GOOGLE_MAPS_API_KEY!

export const FEATURES = {
  LOGS: process.env.EXPO_ENABLE_LOGS === 'true',
  SOS: process.env.EXPO_ENABLE_SOS === 'true',
  GPS: process.env.EXPO_ENABLE_GPS_TRACKING === 'true',
}

// Guardrail (fail fast)
if (!API_URL) {
  throw new Error('EXPO_API_URL is missing in .env')
}
