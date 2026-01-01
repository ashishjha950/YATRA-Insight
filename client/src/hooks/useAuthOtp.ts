import { useState } from 'react'
import { sendOtp, verifyOtp } from '../services/auth.service'

export const useAuthOtp = () => {
  const [loading, setLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const requestOtp = async (email: string) => {
    try {
      setLoading(true)
      await sendOtp(email)
      setOtpSent(true)
    } finally {
      setLoading(false)
    }
  }

  const confirmOtp = async (email: string, otp: string) => {
    try {
      setLoading(true)
      const res = await verifyOtp(email, otp)
      return res // token / user comes from backend
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    otpSent,
    requestOtp,
    confirmOtp,
  }
}
