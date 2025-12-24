import { Router } from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import { syncData } from './sync.controller.js'

const router = Router()

router.post('/', protect, syncData)

export default router
