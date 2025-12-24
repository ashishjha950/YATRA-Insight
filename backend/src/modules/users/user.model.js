import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    select: false
  },

  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('User', userSchema)
