export const triggerSOS = async (req, res) => {
  const { latitude, longitude } = req.body

  // Placeholder: later integrate SMS / authority APIs
  console.log('🚨 SOS:', latitude, longitude, 'User:', req.user.id)

  res.json({
    status: 'SOS triggered',
    location: { latitude, longitude }
  })
}
