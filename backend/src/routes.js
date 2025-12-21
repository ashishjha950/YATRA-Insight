const router = require('express').Router()

router.use('/auth', require('./modules/auth/auth.routes'))
router.use('/users', require('./modules/users/user.routes'))
router.use('/trips', require('./modules/trips/trip.routes'))

router.get('/health', (_, res) =>
  res.json({ status: 'OK' })
)

module.exports = router
