import { Router } from 'express'
const router = Router()

router.post('/summary', (_, res) =>
  res.json({ summary: 'AI service placeholder' })
)

export default router
