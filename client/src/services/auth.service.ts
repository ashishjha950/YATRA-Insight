import api from './api'
import { LoginPayload, RegisterPayload } from '../types/auth.types'

export const loginUser = (data: LoginPayload) => {
  return api.post('/auth/login', data)
}

export const registerUser = (data: RegisterPayload) => {
  return api.post('/auth/register', data)
}
