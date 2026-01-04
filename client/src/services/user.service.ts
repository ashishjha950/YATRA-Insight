import api from './api'

export const updateProfile = (data: {
  name: string
  avatar: string
}) => {
  return api.put('/user/me', data)
}
