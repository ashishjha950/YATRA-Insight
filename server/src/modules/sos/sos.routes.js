import { Router } from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import { triggerSOS } from './sos.controller.js'

const router = Router()

router.post('/trigger', protect, triggerSOS)

export default router
