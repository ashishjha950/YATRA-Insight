import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'

import { uploadImageToCloudinary } from '../../services/upload.service'
import { updateProfile } from '../../services/user.service'
import { useAuth } from '../../context/AuthContext'

const EditProfile: React.FC = () => {
  const { user, updateUser } = useAuth()
  const navigation = useNavigation()

  const [name, setName] = useState(user?.name || '')
  const [profilePic, setProfilePic] = useState(user?.avatar || '')
  const [localImage, setLocalImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permission.granted) {
      Alert.alert(
        'Permission required',
        'Please allow gallery access'
      )
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    })

    if (!result.canceled) {
      const uri = result.assets[0].uri
      setLocalImage(uri)
      setProfilePic(uri) // preview
    }
  }

  const saveProfile = async () => {
    if (!name.trim()) {
      Alert.alert('Validation', 'Name cannot be empty')
      return
    }

    try {
      setLoading(true)

      let avatarUrl = user?.avatar

      if (localImage) {
        avatarUrl = await uploadImageToCloudinary(localImage)
      }

      const res = await updateProfile({
        name,
        avatar: avatarUrl,
      })

      updateUser(res.user)

      Alert.alert('Success', 'Profile updated', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ])
    } catch (e) {
      console.log(e)
      Alert.alert('Error', 'Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity onPress={pickImage}>
        <Image source={profilePic
      ? { uri: profilePic }
      : require('../../../assets/images/default/default-avatar.png')} style={styles.image} />
        <Text style={styles.changeText}>Change Photo</Text>
      </TouchableOpacity>

      {/* Name */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      {/* Email (read-only) */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, styles.disabled]}
        value={user?.email}
        editable={false}
      />

      {/* Save Button */}
      <TouchableOpacity
        style={styles.btn}
        onPress={saveProfile}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.btnText}>Save Changes</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:70,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  changeText: {
    color: "#007bff",
    marginTop: 8,
    textAlign: "center",
  },
  label: {
    alignSelf: "flex-start",
    marginTop: 20,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginTop: 5,
  },
  disabled: {
    backgroundColor: "#f2f2f2",
    color: "#888",
  },
  btn: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
