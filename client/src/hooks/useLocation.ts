import { useEffect, useState } from 'react'
import { getCurrentCoordinates, getLocationName } from '../services/location.service'

export const useLocation = () => {
  const [location, setLocation] = useState<string>('Fetching location...')
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null)

  useEffect(() => {
    const loadLocation = async () => {
      try {
        const coordinates = await getCurrentCoordinates()
        const name = await getLocationName(
          coordinates.latitude,
          coordinates.longitude
        )

        setCoords(coordinates)
        setLocation(name)
      } catch {
        setLocation('Location unavailable')
      }
    }

    loadLocation()
  }, [])

  return { location, coords }
}
