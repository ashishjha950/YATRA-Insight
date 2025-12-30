// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Switch,
//   ScrollView,
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// export default function PermissionsScreen({ navigation }: any) {
//   const [permissions, setPermissions] = useState({
//     location: false,
//     camera: false,
//     storage: false,
//     notifications: false,
//   });

//   const togglePermission = (key: string) => {
//     setPermissions(prev => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const enableAllPermissions = () => {
//     setPermissions({
//       location: true,
//       camera: true,
//       storage: true,
//       notifications: true,
//     });
//   };

//   const handleContinue = () => {
//     navigation.replace('MainTabs');
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.header}>
//           <Text style={styles.title}>Enable Permissions</Text>
//           <Text style={styles.subtitle}>
//             We need some permissions to provide you the best experience
//           </Text>
//         </View>

//         <View style={styles.permissionsContainer}>
//           {/* Location Permission */}
//           <View style={styles.permissionCard}>
//             <View style={styles.iconContainer}>
//               <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
//                 <View style={styles.locationPin}>
//                   <View style={styles.locationPinOuter}>
//                     <View style={styles.locationPinInner} />
//                   </View>
//                   <View style={styles.locationPinBottom} />
//                 </View>
//               </View>
//             </View>
//             <View style={styles.permissionContent}>
//               <View style={styles.permissionHeader}>
//                 <Text style={styles.permissionTitle}>Location</Text>
//                 <View style={styles.requiredBadge}>
//                   <Text style={styles.requiredText}>Required</Text>
//                 </View>
//               </View>
//               <Text style={styles.permissionDescription}>
//                 Required for tracking your trips
//               </Text>
//             </View>
//             <Switch
//               value={permissions.location}
//               onValueChange={() => togglePermission('location')}
//               trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
//               thumbColor="#fff"
//               ios_backgroundColor="#E0E0E0"
//             />
//           </View>

//           {/* Camera Permission */}
//           <View style={styles.permissionCard}>
//             <View style={styles.iconContainer}>
//               <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
//                 <View style={styles.cameraIcon}>
//                   <View style={styles.cameraBody} />
//                   <View style={styles.cameraLens} />
//                   <View style={styles.cameraTop} />
//                 </View>
//               </View>
//             </View>
//             <View style={styles.permissionContent}>
//               <Text style={styles.permissionTitle}>Camera</Text>
//               <Text style={styles.permissionDescription}>
//                 Take photos during your journey
//               </Text>
//             </View>
//             <Switch
//               value={permissions.camera}
//               onValueChange={() => togglePermission('camera')}
//               trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
//               thumbColor="#fff"
//               ios_backgroundColor="#E0E0E0"
//             />
//           </View>

//           {/* Storage Permission */}
//           <View style={styles.permissionCard}>
//             <View style={styles.iconContainer}>
//               <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
//                 <View style={styles.storageIcon}>
//                   <View style={styles.storageBox}>
//                     <View style={styles.storageHandle} />
//                   </View>
//                 </View>
//               </View>
//             </View>
//             <View style={styles.permissionContent}>
//               <Text style={styles.permissionTitle}>Storage</Text>
//               <Text style={styles.permissionDescription}>
//                 Save trip data and documents
//               </Text>
//             </View>
//             <Switch
//               value={permissions.storage}
//               onValueChange={() => togglePermission('storage')}
//               trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
//               thumbColor="#fff"
//               ios_backgroundColor="#E0E0E0"
//             />
//           </View>

//           {/* Notifications Permission */}
//           <View style={styles.permissionCard}>
//             <View style={styles.iconContainer}>
//               <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
//                 <View style={styles.bellIcon}>
//                   <View style={styles.bellBody} />
//                   <View style={styles.bellBottom} />
//                 </View>
//               </View>
//             </View>
//             <View style={styles.permissionContent}>
//               <View style={styles.permissionHeader}>
//                 <Text style={styles.permissionTitle}>Notifications</Text>
//                 <View style={styles.requiredBadge}>
//                   <Text style={styles.requiredText}>Required</Text>
//                 </View>
//               </View>
//               <Text style={styles.permissionDescription}>
//                 Safety alerts and trip updates
//               </Text>
//             </View>
//             <Switch
//               value={permissions.notifications}
//               onValueChange={() => togglePermission('notifications')}
//               trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
//               thumbColor="#fff"
//               ios_backgroundColor="#E0E0E0"
//             />
//           </View>
//         </View>

//         <View style={styles.buttonsContainer}>
//           <TouchableOpacity
//             style={styles.enableAllButton}
//             onPress={enableAllPermissions}
//           >
//             <Text style={styles.enableAllButtonText}>
//               Enable All Permissions
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.continueButton}
//             onPress={handleContinue}
//           >
//             <Text style={styles.continueButtonText}>Continue</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingTop: 60,
//     paddingBottom: 40,
//   },
//   header: {
//     marginBottom: 32,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#9E9E9E',
//     lineHeight: 22,
//   },
//   permissionsContainer: {
//     flex: 1,
//     gap: 16,
//     marginBottom: 32,
//   },
//   permissionCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F8F9FA',
//     borderRadius: 16,
//     padding: 16,
//     gap: 12,
//   },
//   iconContainer: {
//     width: 56,
//     height: 56,
//   },
//   iconCircle: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
//   // Location Pin Icon
//   locationPin: {
//     alignItems: 'center',
//   },
//   locationPinOuter: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: '#5C6BC0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: -4,
//   },
//   locationPinInner: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   locationPinBottom: {
//     width: 0,
//     height: 0,
//     backgroundColor: 'transparent',
//     borderStyle: 'solid',
//     borderLeftWidth: 6,
//     borderRightWidth: 6,
//     borderTopWidth: 10,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderTopColor: '#5C6BC0',
//   },
  
//   // Camera Icon
//   cameraIcon: {
//     width: 32,
//     height: 28,
//     position: 'relative',
//   },
//   cameraBody: {
//     width: 32,
//     height: 22,
//     backgroundColor: '#5C6BC0',
//     borderRadius: 4,
//     marginTop: 4,
//   },
//   cameraLens: {
//     position: 'absolute',
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#E8EAF6',
//     top: 9,
//     left: 10,
//   },
//   cameraTop: {
//     position: 'absolute',
//     width: 8,
//     height: 4,
//     backgroundColor: '#5C6BC0',
//     borderTopLeftRadius: 2,
//     borderTopRightRadius: 2,
//     top: 0,
//     left: 12,
//   },
  
//   // Storage Icon
//   storageIcon: {
//     width: 32,
//     height: 28,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   storageBox: {
//     width: 32,
//     height: 24,
//     backgroundColor: '#5C6BC0',
//     borderRadius: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   storageHandle: {
//     width: 16,
//     height: 3,
//     backgroundColor: '#E8EAF6',
//     borderRadius: 1.5,
//   },
  
//   // Bell Icon
//   bellIcon: {
//     width: 24,
//     height: 28,
//     alignItems: 'center',
//   },
//   bellBody: {
//     width: 20,
//     height: 20,
//     backgroundColor: '#5C6BC0',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     borderBottomLeftRadius: 4,
//     borderBottomRightRadius: 4,
//   },
//   bellBottom: {
//     width: 6,
//     height: 6,
//     backgroundColor: '#5C6BC0',
//     borderRadius: 3,
//     marginTop: 2,
//   },
  
//   permissionContent: {
//     flex: 1,
//   },
//   permissionHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     marginBottom: 4,
//   },
//   permissionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1a1a1a',
//   },
//   requiredBadge: {
//     backgroundColor: '#FFEBEE',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 4,
//   },
//   requiredText: {
//     fontSize: 11,
//     fontWeight: '600',
//     color: '#D32F2F',
//   },
//   permissionDescription: {
//     fontSize: 14,
//     color: '#9E9E9E',
//     marginTop: 2,
//     lineHeight: 18,
//   },
//   buttonsContainer: {
//     gap: 16,
//     marginTop: 8,
//   },
//   enableAllButton: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#2196F3',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   enableAllButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   continueButton: {
//     paddingVertical: 16,
//     alignItems: 'center',
//   },
//   continueButtonText: {
//     color: '#1a1a1a',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });


// src/screens/permissions/PermissionsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function PermissionsScreen({ onComplete }: any) {
  const [permissions, setPermissions] = useState({
    location: false,
    camera: false,
    storage: false,
    notifications: false,
  });

  const togglePermission = (key: string) => {
    setPermissions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const enableAllPermissions = () => {
    setPermissions({
      location: true,
      camera: true,
      storage: true,
      notifications: true,
    });
  };

  const handleContinue = () => {
   onComplete();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Enable Permissions</Text>
          <Text style={styles.subtitle}>
            We need some permissions to provide you the best experience
          </Text>
        </View>

        <View style={styles.permissionsContainer}>
          {/* Location Permission */}
          <View style={styles.permissionCard}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
                <View style={styles.locationPin}>
                  <View style={styles.locationPinOuter}>
                    <View style={styles.locationPinInner} />
                  </View>
                  <View style={styles.locationPinBottom} />
                </View>
              </View>
            </View>
            <View style={styles.permissionContent}>
              <View style={styles.permissionHeader}>
                <Text style={styles.permissionTitle}>Location</Text>
                <View style={{ width: 8 }} />
                <View style={styles.requiredBadge}>
                  <Text style={styles.requiredText}>Required</Text>
                </View>
              </View>
              <Text style={styles.permissionDescription}>
                Required for tracking your trips
              </Text>
            </View>
            <Switch
              value={permissions.location}
              onValueChange={() => togglePermission('location')}
              trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
              thumbColor="#fff"
              ios_backgroundColor="#E0E0E0"
            />
          </View>

          <View style={{ height: 16 }} />

          {/* Camera Permission */}
          <View style={styles.permissionCard}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
                <View style={styles.cameraIcon}>
                  <View style={styles.cameraBody} />
                  <View style={styles.cameraLens} />
                  <View style={styles.cameraTop} />
                </View>
              </View>
            </View>
            <View style={styles.permissionContent}>
              <Text style={styles.permissionTitle}>Camera</Text>
              <Text style={styles.permissionDescription}>
                Take photos during your journey
              </Text>
            </View>
            <Switch
              value={permissions.camera}
              onValueChange={() => togglePermission('camera')}
              trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
              thumbColor="#fff"
              ios_backgroundColor="#E0E0E0"
            />
          </View>

          <View style={{ height: 16 }} />

          {/* Storage Permission */}
          <View style={styles.permissionCard}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
                <View style={styles.storageIcon}>
                  <View style={styles.storageBox}>
                    <View style={styles.storageHandle} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.permissionContent}>
              <Text style={styles.permissionTitle}>Storage</Text>
              <Text style={styles.permissionDescription}>
                Save trip data and documents
              </Text>
            </View>
            <Switch
              value={permissions.storage}
              onValueChange={() => togglePermission('storage')}
              trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
              thumbColor="#fff"
              ios_backgroundColor="#E0E0E0"
            />
          </View>

          <View style={{ height: 16 }} />

          {/* Notifications Permission */}
          <View style={styles.permissionCard}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconCircle, { backgroundColor: '#E8EAF6' }]}>
                <View style={styles.bellIcon}>
                  <View style={styles.bellBody} />
                  <View style={styles.bellBottom} />
                </View>
              </View>
            </View>
            <View style={styles.permissionContent}>
              <View style={styles.permissionHeader}>
                <Text style={styles.permissionTitle}>Notifications</Text>
                <View style={{ width: 8 }} />
                <View style={styles.requiredBadge}>
                  <Text style={styles.requiredText}>Required</Text>
                </View>
              </View>
              <Text style={styles.permissionDescription}>
                Safety alerts and trip updates
              </Text>
            </View>
            <Switch
              value={permissions.notifications}
              onValueChange={() => togglePermission('notifications')}
              trackColor={{ false: '#E0E0E0', true: '#2196F3' }}
              thumbColor="#fff"
              ios_backgroundColor="#E0E0E0"
            />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.enableAllButton}
            onPress={enableAllPermissions}
          >
            <Text style={styles.enableAllButtonText}>
              Enable All Permissions
            </Text>
          </TouchableOpacity>

          <View style={{ height: 16 }} />

          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9E9E9E',
    lineHeight: 22,
  },
  permissionsContainer: {
    flex: 1,
    marginBottom: 32,
  },
  permissionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Location Pin Icon
  locationPin: {
    alignItems: 'center',
  },
  locationPinOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#5C6BC0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -4,
  },
  locationPinInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  locationPinBottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#5C6BC0',
  },
  
  // Camera Icon
  cameraIcon: {
    width: 32,
    height: 28,
    position: 'relative',
  },
  cameraBody: {
    width: 32,
    height: 22,
    backgroundColor: '#5C6BC0',
    borderRadius: 4,
    marginTop: 4,
  },
  cameraLens: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E8EAF6',
    top: 9,
    left: 10,
  },
  cameraTop: {
    position: 'absolute',
    width: 8,
    height: 4,
    backgroundColor: '#5C6BC0',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    top: 0,
    left: 12,
  },
  
  // Storage Icon
  storageIcon: {
    width: 32,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storageBox: {
    width: 32,
    height: 24,
    backgroundColor: '#5C6BC0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storageHandle: {
    width: 16,
    height: 3,
    backgroundColor: '#E8EAF6',
    borderRadius: 1.5,
  },
  
  // Bell Icon
  bellIcon: {
    width: 24,
    height: 28,
    alignItems: 'center',
  },
  bellBody: {
    width: 20,
    height: 20,
    backgroundColor: '#5C6BC0',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  bellBottom: {
    width: 6,
    height: 6,
    backgroundColor: '#5C6BC0',
    borderRadius: 3,
    marginTop: 2,
  },
  
  permissionContent: {
    flex: 1,
  },
  permissionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  requiredBadge: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  requiredText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#D32F2F',
  },
  permissionDescription: {
    fontSize: 14,
    color: '#9E9E9E',
    marginTop: 2,
    lineHeight: 18,
  },
  buttonsContainer: {
    marginTop: 8,
  },
  enableAllButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  enableAllButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  continueButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#1a1a1a',
    fontSize: 18,
    fontWeight: '600',
  },
});