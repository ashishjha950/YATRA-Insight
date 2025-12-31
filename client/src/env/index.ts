export const ENV =
  process.env.EXPO_PUBLIC_ENV || 'development'

export const API_URL =
  process.env.EXPO_PUBLIC_API_URL

export const GOOGLE_MAPS_KEY =
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY

export const FEATURES = {
  LOGS: process.env.EXPO_PUBLIC_ENABLE_LOGS === 'true',
  SOS: process.env.EXPO_PUBLIC_ENABLE_SOS === 'true',
  GPS: process.env.EXPO_PUBLIC_ENABLE_GPS_TRACKING === 'true',
}

// Guardrail (fail fast, runtime-safe)
export const assertEnv = () => {
  if (!API_URL) {
    throw new Error(
      'EXPO_PUBLIC_API_URL is missing in .env'
    )
  }
}
