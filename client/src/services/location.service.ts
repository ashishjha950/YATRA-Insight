import * as Location from 'expo-location'

export const getCurrentCoordinates = async () => {
  const position = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
  })

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  }
}

export const getLocationName = async (
  latitude: number,
  longitude: number
) => {
  const [place] = await Location.reverseGeocodeAsync({
    latitude,
    longitude,
  })

  if (!place) return 'Unknown location'

  const city = place.city || place.subregion || ''
  const region = place.region || ''

  return `${city}${region ? ', ' + region : ''}`
}
