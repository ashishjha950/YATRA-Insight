import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema({
  identifier: {
    type: String, // phone or email
    required: true
  },

  otp: {
    type: String,
    required: true
  },

  expiresAt: {
    type: Date,
    required: true
  }
})

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

export default mongoose.model('Otp', otpSchema)
