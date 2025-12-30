import { useState } from 'react'
import { loginUser } from '../services/auth.service'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)

  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      return await loginUser({ email, password })
    } finally {
      setLoading(false)
    }
  }

  return { login, loading }
}
