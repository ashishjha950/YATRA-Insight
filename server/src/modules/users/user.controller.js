import { updateUserById } from './user.service.js'

export const getMe = async (req, res) => {
  res.json(req.user)
}

export const updateMe = async (req, res) => {
  const user = await updateUserById(req.user.id, req.body)

  res.json({
    message: 'Profile updated',
    user,
  })
}
