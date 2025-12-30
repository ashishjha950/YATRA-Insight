import { Router } from 'express'
import { protect } from '../../middlewares/auth.middleware.js'

const router = Router()

router.get('/me', protect, (req, res) => {
  res.json({ user: req.user })
})

export default router
