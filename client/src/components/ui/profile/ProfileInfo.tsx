// // src/components/profile/ProfileHeader.tsx

// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { ProfileHeaderProps } from '../../../types/profile.types';

// const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, onEditPress }) => {
//   return (
//     <View style={styles.profileCard}>
//       {/* Avatar - Matches your original implementation exactly */}
//       <View style={styles.avatarContainer}>
//         <Image
//           source={
//             user.avatar
//               ? { uri: user.avatar }
//               : require('../../../../assets/images/default/default-avatar.png')
//           }
//           style={styles.avatarImage}
//         />
//       </View>

//       <View style={styles.profileInfo}>
//         <Text style={styles.name}>{user?.name || 'User'}</Text>
//         <Text style={styles.email}>{user?.email || 'user@email.com'}</Text>
//         {user?.phone && <Text style={styles.phone}>{user.phone}</Text>}
//       </View>

//       <TouchableOpacity onPress={onEditPress}>
//         <Text style={styles.editText}>Edit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   profileCard: {
//     backgroundColor: 'linear-gradient(135deg, #42A5F5 0%, #26C6DA 100%)',
//     borderRadius: 18,
//     padding: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     elevation: 6,
//   },
//   avatarContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatarImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 3,
//     borderColor: 'rgba(255, 255, 255, 0.3)',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   email: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.9)',
//     marginBottom: 2,
//   },
//   phone: {
//     fontSize: 13,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   editText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
// });

// export default ProfileHeader;




// src/components/profile/ProfileHeader.tsx

// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { ProfileHeaderProps } from '../../../types/profile.types';

// const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, onEditPress }) => {
//   return (
//     <View style={styles.profileCard}>
//       <View style={styles.avatarContainer}>
//         <Image
//           source={
//             user?.avatar
//               ? { uri: user.avatar }
//               : require('../../../../assets/images/default/default-avatar.png')
//           }
//           style={styles.avatarImage}
//         />
//       </View>

//       <View style={styles.profileInfo}>
//         <Text style={styles.name}>{user?.name || 'User'}</Text>
//         <Text style={styles.email}>{user?.email || 'user@email.com'}</Text>
//       </View>

//       <TouchableOpacity onPress={onEditPress} style={styles.editButton}>
//         <Text style={styles.editText}>Edit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   profileCard: {
//     backgroundColor: '#fff',
//     borderRadius: 18,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     marginHorizontal: 6,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   avatarContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 12,
//     backgroundColor: '#F5F5F5',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   avatarImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1A1A1A',
//     marginBottom: 4,
//   },
//   email: {
//     fontSize: 13,
//     color: '#6B7280',
//   },
//   editButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//   },
//   editText: {
//     color: '#2196F3',
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });

// export default ProfileHeader;



// src/components/profile/ProfileHeader.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProfileHeaderProps } from '../../../types/profile.types';

const ProfileInfo: React.FC<ProfileHeaderProps> = ({ user, onEditPress }) => {
  return (
    <LinearGradient
      colors={['#42A5F5', '#26C6DA']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.profileCard}
    >
      <View style={styles.avatarContainer}>
        <View style={styles.avatarBorder}>
          <Image
            source={
              user?.avatar
                ? { uri: user.avatar }
                : require('../../../../assets/images/default/default-avatar.png')
            }
            style={styles.avatarImage}
          />
        </View>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{user?.name || 'User'}</Text>
        <Text style={styles.email}>{user?.email || 'user@email.com'}</Text>
        {user?.phone && <Text style={styles.phone}>{user.phone}</Text>}
      </View>

      <TouchableOpacity onPress={onEditPress} style={styles.editButton}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    borderRadius: 18,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatarBorder: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: 2,
  },
  phone: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  editButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  editText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProfileInfo;