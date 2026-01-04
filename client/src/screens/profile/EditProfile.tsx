import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { getUser , updateUser } from "../../utils/secureStorage";



const EditProfile: React.FC = () => {
   const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("");

  const [profilePic, setProfilePic] = useState<string | null>(null);

    type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};
     type NavigationProp =
        NativeStackNavigationProp<ProfileStackParamList>;
        const navigation = useNavigation<NavigationProp>();

    const pickImage = async (): Promise<void> => {
        const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (!permission.granted) {
            Alert.alert("Permission required", "Please allow gallery access");
            return;
        }
  
  
  const result: ImagePicker.ImagePickerResult =
  await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

const saveProfile = async () => {
  const storedUser = await getUser();
  if (!storedUser) return;

  const updatedUser = {
    ...storedUser,
    name,
    profilePic,
  };

  await updateUser(updatedUser);

  Alert.alert("Success", "Profile updated successfully", [
    {
      text: "OK",
      onPress: () => navigation.goBack(),
    },
  ]);
};






useEffect(() => {
  const fetchUser = async () => {
    const storedUser = await getUser();
    if (storedUser) {
      setName(storedUser.name || "");
      setEmail(storedUser.email || "");
      setGender(storedUser.gender || "");
      setProfilePic(storedUser.profilePic || null);
    }
  };

  fetchUser();
}, []);





  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity onPress={pickImage}>
      <Image
  source={{
    uri: profilePic || "https://i.pravatar.cc/300",
  }}
  style={styles.image}
/>

        <Text style={styles.changeText}>Change Photo</Text>
      </TouchableOpacity>

      {/* Name (Editable) */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      {/* Email (Read Only) */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, styles.disabled]}
        value={email}
        editable={false}
      />

      {/* Gender (Read Only) */}
      <Text style={styles.label}>Gender</Text>
      <TextInput
        style={[styles.input, styles.disabled]}
        value={gender}
        editable={false}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.btn} onPress={saveProfile}>
        <Text style={styles.btnText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

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
