import Expense from './expense.model.js'

export const addExpense = async (req, res) => {
  const expense = await Expense.create({
    ...req.body,
    userId: req.user.id
  })
  res.status(201).json(expense)
}

export const getTripExpenses = async (req, res) => {
  const expenses = await Expense.find({
    tripId: req.params.tripId,
    userId: req.user.id
  })
  res.json(expenses)
}
