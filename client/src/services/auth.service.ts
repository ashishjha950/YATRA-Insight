import api from './api'

export const sendOtp = (email: string) => {
  return api.post('/auth/send-otp', { email })
}

export const verifyOtp = (email: string, otp: string) => {
  return api.post('/auth/verify-otp', { email, otp })
}