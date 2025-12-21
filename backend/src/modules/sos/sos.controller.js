export const triggerSOS = async (req, res) => {
  const { location } = req.body

  // In real life → notify services
  console.log('SOS triggered at', location)

  res.json({ status: 'SOS sent' })
}
