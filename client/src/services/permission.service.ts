import * as Location from 'expo-location'
import * as Camera from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as Notifications from 'expo-notifications'

export const requestLocationPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync()
  return status === 'granted'
}

export const requestCameraPermission = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync()
  return status === 'granted'
}

export const requestStoragePermission = async () => {
  const { status } = await MediaLibrary.requestPermissionsAsync()
  return status === 'granted'
}

export const requestNotificationPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync()
  return status === 'granted'
}
