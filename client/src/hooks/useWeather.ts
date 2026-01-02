import { useEffect, useState } from 'react'
import { getWeatherByCoords } from '../services/weather.service'

type WeatherData = {
  condition: string
  temp: number
  aqi: number
}

export const useWeather = (
  lat?: number,
  lon?: number
) => {
  const [weather, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!lat || !lon) return

    const load = async () => {
      try {
        setLoading(true)
        const res = await getWeatherByCoords(lat, lon)
        setData(res)
      } catch (e) {
        console.log('❌ WEATHER ERROR', e)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [lat, lon])

  return { weather, loading }
}
