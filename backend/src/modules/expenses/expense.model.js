import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  tripId: mongoose.Schema.Types.ObjectId,

  localId: String,
  amount: Number,
  category: String,
  note: String,

  updatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false }
})

expenseSchema.index({ userId: 1, localId: 1 }, { unique: true })

export default mongoose.model('Expense', expenseSchema)
