import { Router } from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import {
  createTrip,
  addRoutePoint,
  endTrip,
  getTrips,
  deleteTrip
} from './trip.controller.js'

const router = Router()

router.post('/', protect, createTrip)
router.get('/', protect, getTrips)

router.post('/:tripId/route', protect, addRoutePoint)
router.post('/:tripId/end', protect, endTrip)
router.delete('/:tripId', protect, deleteTrip)

export default router
