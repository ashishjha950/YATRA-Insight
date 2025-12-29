import { Router } from 'express'

import adminAuthRoutes from './modules/auth/admin.auth.routes.js'
import authRoutes from './modules/auth/auth.routes.js'
import userRoutes from './modules/users/user.routes.js'
import tripRoutes from './modules/trips/trip.routes.js'
import expenseRoutes from './modules/expenses/expense.routes.js'
import sosRoutes from './modules/sos/sos.routes.js'
import adminRoutes from './modules/admin/admin.routes.js'
import aiRoutes from './modules/ai/ai.routes.js'
import syncRoutes from './modules/sync/sync.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/admin/auth', adminAuthRoutes)
router.use('/users', userRoutes)
router.use('/trips', tripRoutes)
router.use('/expenses', expenseRoutes)
router.use('/sos', sosRoutes)
router.use('/admin', adminRoutes)
router.use('/ai', aiRoutes)
router.use('/sync', syncRoutes)

router.get('/health', (_, res) =>
  res.json({ status: 'OK' })
)

export default router
