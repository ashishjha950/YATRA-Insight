import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import * as Location from 'expo-location'

export default function CurrentLocation() {
  const [locationText, setLocationText] = useState('Detecting location...')

  useEffect(() => {
    const loadLocation = async () => {
      try {
        // 🔹 DO NOT request permission again
        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        })

        const { latitude, longitude } = position.coords

        const [place] = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        })

        if (place) {
          const city = place.city || place.subregion || 'Unknown'
          const region = place.region || ''
          setLocationText(`${city}${region ? ', ' + region : ''}`)
        } else {
          setLocationText('Location unavailable')
        }
      } catch (err) {
        setLocationText('Location access disabled')
      }
    }

    loadLocation()
  }, [])

  return <Text style={styles.location}>{locationText}</Text>
}
