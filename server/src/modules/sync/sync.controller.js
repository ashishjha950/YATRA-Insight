import Trip from '../trips/trip.model.js'
import Expense from '../expenses/expense.model.js'

export const syncData = async (req, res) => {
  const { trips = [], expenses = [], lastSyncAt } = req.body
  const userId = req.user.id

  // ---- UPSERT TRIPS ----
  for (const t of trips) {
    await Trip.findOneAndUpdate(
      { user: userId, localId: t.localId },
      { ...t, user: userId },
      { upsert: true }
    )
  }

  // ---- UPSERT EXPENSES ----
  for (const e of expenses) {
    await Expense.findOneAndUpdate(
      { userId, localId: e.localId },
      { ...e, userId },
      { upsert: true }
    )
  }

  // ---- SEND BACK CHANGES FROM SERVER ----
  const updatedTrips = await Trip.find({
    user: userId,
    updatedAt: { $gt: lastSyncAt }
  })

  const updatedExpenses = await Expense.find({
    userId,
    updatedAt: { $gt: lastSyncAt }
  })

  res.json({
    trips: updatedTrips,
    expenses: updatedExpenses,
    syncedAt: new Date()
  })
}
