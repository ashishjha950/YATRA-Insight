import mongoose from 'mongoose'

const tripSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  // UUID from mobile for offline sync
  localId: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['ONGOING', 'COMPLETED'],
    default: 'ONGOING'
  },

  startDate: {
    type: Date,
    required: true
  },

  endDate: Date,

  // GPS route
  route: {
    type: {
      type: String,
      enum: ['LineString'],
      default: 'LineString'
    },
    coordinates: {
      type: [[Number]], // [lng, lat]
      default: []
    }
  },

  updatedAt: {
    type: Date,
    default: Date.now
  },

  deleted: {
    type: Boolean,
    default: false
  }
})

tripSchema.index({ user: 1, localId: 1 }, { unique: true })
tripSchema.index({ route: '2dsphere' })

export default mongoose.model('Trip', tripSchema)
