import Trip from '../trips/trip.model.js'

export const getHeatmap = async (_, res) => {
  const routes = await Trip.find(
    {},
    { route: 1, _id: 0 }
  )
  res.json(routes)
}
