// Payloads sent TO backend
export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

// What backend RETURNS after auth
export interface AuthUser {
  id: string
  name: string
  email: string
  role: 'USER' | 'ADMIN'
}

// Auth response shape
export interface AuthResponse {
  token: string
  user: AuthUser
}
