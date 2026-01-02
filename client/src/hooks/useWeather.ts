import { useEffect, useState } from 'react'
import { getWeatherByCoords } from '../services/weather.service'

export const useWeather = (
  latitude?: number,
  longitude?: number
) => {
  const [weather, setWeather] = useState<{
    condition: string
    temp: number | null
  }>({
    condition: '',
    temp: null,
  })

  useEffect(() => {
    if (!latitude || !longitude) return

    const loadWeather = async () => {
      try {
        const data = await getWeatherByCoords(latitude, longitude)
        setWeather(data)
      } catch {
        setWeather({ condition: 'Unavailable', temp: null })
      }
    }

    loadWeather()
  }, [latitude, longitude])

  return weather
}
