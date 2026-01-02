export const mapAirVisualIcon = (icon: string): string => {
  const map: Record<string, string> = {
    '01d': 'Clear',
    '01n': 'Clear',
    '02d': 'Partly Cloudy',
    '02n': 'Partly Cloudy',
    '03d': 'Cloudy',
    '03n': 'Cloudy',
    '04d': 'Overcast',
    '04n': 'Overcast',
    '09d': 'Rain',
    '09n': 'Rain',
    '10d': 'Rain',
    '10n': 'Rain',
    '11d': 'Thunderstorm',
    '11n': 'Thunderstorm',
    '13d': 'Snow',
    '13n': 'Snow',
    '50d': 'Mist',
    '50n': 'Mist',
  }

  return map[icon] || 'Unknown'
}
