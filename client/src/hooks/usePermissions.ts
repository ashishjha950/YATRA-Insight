import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import * as Camera from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as Notifications from 'expo-notifications'

import {
  requestLocationPermission,
  requestCameraPermission,
  requestStoragePermission,
  requestNotificationPermission,
} from '../services/permission.service'

export const usePermissions = () => {
  const [permissions, setPermissions] = useState({
    location: false,
    camera: false,
    storage: false,
    notifications: false,
  })

  const checkPermissions = async () => {
    const location = await Location.getForegroundPermissionsAsync()
    const camera = await Camera.getCameraPermissionsAsync()
    const storage = await MediaLibrary.getPermissionsAsync()
    const notifications = await Notifications.getPermissionsAsync()

    setPermissions({
      location: location.status === 'granted',
      camera: camera.status === 'granted',
      storage: storage.status === 'granted',
      notifications: notifications.status === 'granted',
    })
  }

  useEffect(() => {
    checkPermissions()
  }, [])

  const requestPermission = async (type: keyof typeof permissions) => {
    let granted = false

    switch (type) {
      case 'location':
        granted = await requestLocationPermission()
        break
      case 'camera':
        granted = await requestCameraPermission()
        break
      case 'storage':
        granted = await requestStoragePermission()
        break
      case 'notifications':
        granted = await requestNotificationPermission()
        break
    }

    setPermissions((prev) => ({
      ...prev,
      [type]: granted,
    }))
  }

  return {
    permissions,
    requestPermission,
  }
}
