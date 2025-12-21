import mongoose from 'mongoose'

const tripSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  title: String,
  route: {
    type: { type: String, default: 'LineString' },
    coordinates: [[Number]]
  },
  startDate: Date,
  endDate: Date
})

tripSchema.index({ route: '2dsphere' })

export default mongoose.model('Trip', tripSchema)
