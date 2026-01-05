import * as Location from 'expo-location';


export const getCurrentCoordinates = async () => {

  // 1️⃣ Try last known location (FAST & RELIABLE)
  const lastKnown = await Location.getLastKnownPositionAsync()

  if (lastKnown) {
    return {
      latitude: lastKnown.coords.latitude,
      longitude: lastKnown.coords.longitude,
    }
  }


  // 2️⃣ Fallback to fresh GPS fix
  const position = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
    timeout: 10000, // ⏱️ avoid infinite hang
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
