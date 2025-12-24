import { Router } from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import { allowRoles } from '../../middlewares/role.middleware.js'
import { getHeatmap } from './admin.controller.js'

const router = Router()

router.get(
  '/heatmap',
  protect,
  allowRoles('ADMIN'),
  getHeatmap
)

export default router
