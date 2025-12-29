import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },

    email: {
      type: String,
      lowercase: true,
      sparse: true // allows multiple nulls
    },

    phone: {
      type: String,
      sparse: true
    },

    isVerified: {
      type: Boolean,
      default: false
    },

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    }
  },
  { timestamps: true }
)

// Ensure at least ONE identity exists
userSchema.index(
  { email: 1 },
  { unique: true, sparse: true }
)

userSchema.index(
  { phone: 1 },
  { unique: true, sparse: true }
)

export default mongoose.model('User', userSchema)
