import axios from 'axios'
import { mapAirVisualIcon } from '../utils/weatherMap'
import { WEATHER_API_KEY } from '../env'

export const getWeatherByCoords = async (
  lat: number,
  lon: number
) => {
  const res = await axios.get(
    'https://api.airvisual.com/v2/nearest_city',
    {
      params: {
        lat,
        lon,
        key: WEATHER_API_KEY,
      },
    }
  )

  const current = res.data?.data?.current

  if (!current?.weather || !current?.pollution) {
    throw new Error('Invalid AirVisual response')
  }

  return {
    condition: mapAirVisualIcon(current.weather.ic),
    temp: current.weather.tp,
    aqi: current.pollution.aqius,
  }
}
