import Trip from './trip.model.js'

/**
 * CREATE TRIP
 */
export const createTrip = async (req, res) => {
  const { localId, title, startDate } = req.body

  if (!localId || !title || !startDate)
    return res.status(400).json({ message: 'Missing fields' })

  const trip = await Trip.create({
    user: req.user.id,
    localId,
    title,
    startDate
  })

  res.status(201).json(trip)
}

/**
 * ADD GPS POINT (live tracking)
 */
export const addRoutePoint = async (req, res) => {
  const { tripId } = req.params
  const { longitude, latitude } = req.body

  await Trip.findOneAndUpdate(
    { _id: tripId, user: req.user.id },
    {
      $push: {
        'route.coordinates': [longitude, latitude]
      },
      updatedAt: new Date()
    }
  )

  res.json({ status: 'Point added' })
}

/**
 * END TRIP
 */
export const endTrip = async (req, res) => {
  const { tripId } = req.params

  const trip = await Trip.findOneAndUpdate(
    { _id: tripId, user: req.user.id },
    {
      status: 'COMPLETED',
      endDate: new Date(),
      updatedAt: new Date()
    },
    { new: true }
  )

  res.json(trip)
}

/**
 * GET USER TRIPS
 */
export const getTrips = async (req, res) => {
  const trips = await Trip.find({
    user: req.user.id,
    deleted: false
  }).sort({ startDate: -1 })

  res.json(trips)
}

/**
 * SOFT DELETE TRIP (offline-safe)
 */
export const deleteTrip = async (req, res) => {
  await Trip.findOneAndUpdate(
    { _id: req.params.tripId, user: req.user.id },
    { deleted: true, updatedAt: new Date() }
  )

  res.json({ status: 'Trip deleted' })
}
