import { Router } from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import {
  addExpense,
  getTripExpenses
} from './expense.controller.js'

const router = Router()

router.post('/', protect, addExpense)
router.get('/:tripId', protect, getTripExpenses)

export default router
