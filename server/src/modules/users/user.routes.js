import express from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import { getMe, updateMe } from './user.controller.js'

const router = express.Router()

router.get('/me', protect, getMe)
router.put('/me', protect, updateMe)

export default router
