import User from './user.model.js'

export const updateUserById = async (userId, payload) => {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      name: payload.name,
      avatar: payload.avatar,
    },
    { new: true }
  )

  return user
}
