import axios from 'axios'
import { WEATHER_API_KEY } from '../env'

export const getWeatherByCoords = async (
  lat: number,
  lon: number
) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  )
  console.log(res)

  if (!res.status) {
    throw new Error('Weather fetch failed')
  }

  const data = res

  return {
    condition: data.weather[0].main,
    temp: Math.round(data.main.temp),
  }
}
