
// import React, { useEffect, useState } from 'react';
// import { useNavigation } from "@react-navigation/native";

// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// import SettingItems from './SettingItems';
// import RecordButton from '../../components/ui/diary/RecordButton';
// import { clearAuth, getUser } from '../../utils/secureStorage';
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useAuth } from '../../context/AuthContext';

// export default function ProfileScreen() {
//     const {user} = useAuth();
  

//   const logoutUser = async () => {
//     await clearAuth();
//     // yaha baad me navigation reset bhi kar sakte ho
//   };

// type ProfileStackParamList = {
//   Profile: undefined;
//   EditProfile: undefined;
// };

// type NavigationProp =
//   NativeStackNavigationProp<ProfileStackParamList>;


//   const navigation = useNavigation<NavigationProp>();

//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Profile & Settings</Text>
//         </View>

//         {/* Profile Card */}
//         <View style={styles.profileCard}>
//           <View style={styles.avatar}>
//             <View>
//               <Image source={user.avatar
//                     ? { uri: user.avatar }
//                     : require('../../../assets/images/default/default-avatar.png')}
//                     style={{ width: 80, height: 80, borderRadius: 40 }} />
//             </View>
//           </View>

//           <View style={styles.profileInfo}>
//             <Text style={styles.name}>{user?.name || 'User'}</Text>
//             <Text style={styles.email}>{user?.email || 'user@email.com'}</Text>
//           </View>

//           <TouchableOpacity
//              onPress={() => navigation.navigate("EditProfile")}
//           >
//             <Text style={styles.editText}>Edit</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Stats */}
//         <View style={styles.statsRow}>
//           <StatCard label="Trips" value="24" />
//           <StatCard label="Miles" value="3,420" />
//           <StatCard label="Spent" value="$2.4k" />
//         </View>

//         {/* Account */}
//         <Text style={styles.sectionTitle}>Account</Text>
//         <View style={styles.sectionCard}>
//           <SettingItem title="Profile Information" />
//           <Divider />
//           <SettingItem title="Emergency Contacts" badge="2" />
//         </View>

//         {/* Privacy & Data */}
//         <Text style={styles.sectionTitle}>Privacy & Data</Text>
//         <View style={styles.sectionCard}>
//           <SettingItems title="Privacy & Consent" />
//           <Divider />
//           <SettingItems title="Location Data Usage" />
//           <Divider />
//           <SettingItems title="Download My Data" />
//           <Divider />
//           <SettingItems title="Terms & Policies" />
//           <Divider />
//           <SettingItems title="Delete Account" danger />
//           <Divider />
//           <SettingItems title="Logout" danger onPress={logoutUser} />
//         </View>

//         <View style={{ height: 60 }} />
//       </ScrollView>

//       {/* Floating Button */}
//       <RecordButton />
//     </View>
//   );
// }

// /* ---------------- COMPONENTS ---------------- */

// function StatCard({ label, value }: { label: string; value: string }) {
//   return (
//     <View style={styles.statCard}>
//       <Text style={styles.statValue}>{value}</Text>
//       <Text style={styles.statLabel}>{label}</Text>
//     </View>
//   );
// }

// function SettingItem({ title, badge }: any) {
//   return (
//     <TouchableOpacity style={styles.settingRow}>
//       <View style={styles.settingLeft}>
//         <View style={styles.iconPlaceholder} />
//         <Text style={styles.settingText}>{title}</Text>
//       </View>

//       <View style={styles.settingRight}>
//         {badge && (
//           <View style={styles.badge}>
//             <Text style={styles.badgeText}>{badge}</Text>
//           </View>
//         )}
//         <Text style={styles.arrow}>›</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// function Divider() {
//   return <View style={styles.divider} />;
// }

// /* ---------------- STYLES ---------------- */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F8FA',
//     paddingHorizontal: 16,
//   },
//   header: {
//     paddingTop: 60,
//     paddingBottom: 16,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   profileCard: {
//     backgroundColor: '#fff',
//     borderRadius: 18,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     backgroundColor: '#2196F3',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   avatarText: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: '700',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   email: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginTop: 2,
//   },
//   editText: {
//     color: '#2196F3',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 24,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     paddingVertical: 16,
//     alignItems: 'center',
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   statLabel: {
//     fontSize: 13,
//     color: '#9E9E9E',
//     marginTop: 4,
//   },
//   sectionTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#1A1A1A',
//     marginBottom: 8,
//   },
//   sectionCard: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     marginBottom: 20,
//   },
//   settingRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//   },
//   settingLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   iconPlaceholder: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#E8F2FF',
//   },
//   settingText: {
//     fontSize: 15,
//     color: '#1A1A1A',
//     fontWeight: '500',
//   },
//   settingRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   arrow: {
//     fontSize: 18,
//     color: '#9E9E9E',
//   },
//   badge: {
//     backgroundColor: '#E8F2FF',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 10,
//   },
//   badgeText: {
//     color: '#2196F3',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#F0F0F0',
//     marginHorizontal: 16,
//   },
// });




// src/screens/profile/ProfileScreen.tsx

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import ProfileHeader from '../../components/ui/profile/ProfileHeader';
// import ProfileStats from '../../components/ui/profile/ProfileStats';
// import SettingsSection from '../../components/ui/profile/SettingSection';
// import SettingItem from '../../components/ui/profile/SettingItem';
// import PrivacyNotice from '../../components/ui/profile/PrivacyNotice';
// import LogoutButton from '../../components/ui/profile/LogoutButton';
// import Divider from '../../components/ui/profile/Divider';
// import RecordButton from '../../components/ui/diary/RecordButton';

// import { clearAuth } from '../../utils/secureStorage';
// import { useAuth } from '../../context/AuthContext';
// import { ProfileStackParamList } from '../../types/profile.types';

// type NavigationProp = NativeStackNavigationProp<ProfileStackParamList>;

// export default function ProfileScreen() {
//   // ✅ KEEPING YOUR ORIGINAL BACKEND LOGIC
//   const { user } = useAuth(); // Your authentication context
//   const navigation = useNavigation<NavigationProp>();

//   const handleEditProfile = () => {
//     navigation.navigate('EditProfile');
//   };

//   const logoutUser = async () => {
//     await clearAuth();
//     // yaha baad me navigation reset bhi kar sakte ho
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Profile & Settings</Text>
//         </View>

//         {/* Profile Card - Using REAL user data from backend */}
//         <ProfileHeader
//           user={{
//             name: user?.name || 'User',
//             email: user?.email || 'user@email.com',
//             phone: user?.phone || '',
//             avatar: user?.avatar, // Real avatar from backend
//           }}
//           onEditPress={handleEditProfile}
//         />

//         {/* Stats - You can connect this to real backend data later */}
//         <ProfileStats trips="24" miles="3,420" spent="$2.4k" />

//         {/* Account Section */}
//         <SettingsSection title="Account">
//           <SettingItem
//             title="Profile Information"
//             icon="person-outline"
//             iconBgColor="#E8F2FF"
//           />
//           <Divider />
//           <SettingItem
//             title="Emergency Contacts"
//             icon="call-outline"
//             iconBgColor="#E3F2FD"
//             badge="2"
//           />
//         </SettingsSection>

//         {/* Privacy & Data Section */}
//         <SettingsSection title="Privacy & Data">
//           <SettingItem
//             title="Privacy & Consent"
//             icon="shield-checkmark-outline"
//             iconBgColor="#E8F5E9"
//           />
//           <Divider />
//           <SettingItem
//             title="Location Data Usage"
//             icon="location-outline"
//             iconBgColor="#FFF3E0"
//           />
//           <Divider />
//           <SettingItem
//             title="Download My Data"
//             icon="download-outline"
//             iconBgColor="#E3F2FD"
//           />
//           <Divider />
//           <SettingItem
//             title="Terms & Policies"
//             icon="document-text-outline"
//             iconBgColor="#F3E5F5"
//           />
//           <Divider />
//           <SettingItem
//             title="Delete Account"
//             icon="trash-outline"
//             iconBgColor="#FFEBEE"
//             danger
//           />
//         </SettingsSection>

//         {/* Privacy Notice */}
//         <PrivacyNotice />

//         {/* Logout Button - Using your original logout logic */}
//         <LogoutButton onPress={logoutUser} />

//         <View style={{ height: 60 }} />
//       </ScrollView>

//       {/* Floating Button */}
//       <RecordButton />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F8FA',
//     paddingHorizontal: 16,
//   },
//   header: {
//     paddingTop: 60,
//     paddingBottom: 16,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
// });



// src/screens/profile/ProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ProfileInfo from '../../components/ui/profile/ProfileInfo';
import ProfileStats from '../../components/ui/profile/ProfileStats';
import SettingsSection from '../../components/ui/profile/SettingSection';
import SettingItem from '../../components/ui/profile/SettingItem';
import Divider from '../../components/ui/profile/Divider';
import RecordButton from '../../components/ui/diary/RecordButton';

import { clearAuth } from '../../utils/secureStorage';
import { useAuth } from '../../context/AuthContext';
import PrivacyNotice from '../../components/ui/profile/PrivacyNotice';
import LogoutButton from '../../components/ui/profile/LogoutButton';
import ProfileHeader from '../../components/ui/profile/ProfileHeader';

type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

type NavigationProp = NativeStackNavigationProp<ProfileStackParamList>;

export default function ProfileScreen() {
  const { user } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  const logoutUser = async () => {
    await clearAuth();
    // yaha baad me navigation reset bhi kar sakte ho
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        {/* <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile & Settings</Text>
        </View> */}

        <ProfileHeader />

        {/* Profile Card */}
        <ProfileInfo
          user={user}
          onEditPress={() => navigation.navigate('EditProfile')}
        />

        {/* Stats */}
        <ProfileStats trips="24" miles="3,420" spent="$2.4k" />

        {/* Account Section */}
        <SettingsSection title="Account">
          <SettingItem
            title="Profile Information"
            icon="person-outline"
            iconBgColor="#E8F2FF"
          />
          <Divider />
          <SettingItem
            title="Emergency Contacts"
            icon="call-outline"
            iconBgColor="#E3F2FD"
            badge="2"
          />
        </SettingsSection>

        {/* Privacy & Data Section */}
        <SettingsSection title="Privacy & Data">
          <SettingItem
            title="Privacy & Consent"
            icon="shield-checkmark-outline"
            iconBgColor="#E8F5E9"
          />
          <Divider />
          <SettingItem
            title="Location Data Usage"
            icon="location-outline"
            iconBgColor="#FFF3E0"
          />
          <Divider />
          <SettingItem
            title="Download My Data"
            icon="download-outline"
            iconBgColor="#E3F2FD"
          />
          <Divider />
          <SettingItem
            title="Terms & Policies"
            icon="document-text-outline"
            iconBgColor="#F3E5F5"
          />
        </SettingsSection>

        {/* privacy Notice */}
        <PrivacyNotice />

        {/* Logout Button  */}
        <LogoutButton onPress={logoutUser} />

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Floating Button */}
      <RecordButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FA',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },
});