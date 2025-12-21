import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
  tripId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  category: String,
  note: String,
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Expense', expenseSchema)
