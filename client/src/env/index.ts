export const ENV =
  process.env.EXPO_PUBLIC_ENV || 'development'

export const API_URL =
  process.env.EXPO_PUBLIC_API_URL

export const WEATHER_API_KEY =
  process.env.EXPO_PUBLIC_WEATHER_API_KEY!

export const GOOGLE_MAPS_KEY =
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY

export const FEATURES = {
  LOGS: process.env.EXPO_PUBLIC_ENABLE_LOGS === 'true',
  SOS: process.env.EXPO_PUBLIC_ENABLE_SOS === 'true',
  GPS: process.env.EXPO_PUBLIC_ENABLE_GPS_TRACKING === 'true',
}

export const CLOUDINARY_CLOUD_NAME =
  process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME!

export const CLOUDINARY_UPLOAD_PRESET =
  process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET!

// Fail fast (good practice)
if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
  throw new Error('Cloudinary env variables are missing')
}

// Guardrail (fail fast, runtime-safe)
export const assertEnv = () => {
  if (!API_URL) {
    throw new Error(
      'EXPO_PUBLIC_API_URL is missing in .env'
    )
  }
}
