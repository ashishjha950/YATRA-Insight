// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import OnboardingScreen from "../screens/onBoarding/OnboardingScreen";
// // import LoginScreen from "../screens/auth/LoginScreen";

// const Stack = createNativeStackNavigator();

// export default function RootNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//       {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
//     </Stack.Navigator>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from '../screens/SplashScreen';
// import OnboardingScreen from '../screens/onBoarding/OnboardingScreen';
// import LoginScreen from '../screens/auth/LoginScreen';
// import EmergencyContactScreen from '../screens/auth/EmergencyContactScreen';
// import PermissionsScreen from '../screens/permissions/PermissionsScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   if (isLoading) {
//     return <SplashScreen />;
//   }

//   return (
//       <Stack.Navigator 
//         screenOptions={{ headerShown: false }}
//         initialRouteName="Onboarding"
//       >
//         <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//        <Stack.Screen name="Login" component={LoginScreen} />
//        <Stack.Screen name="EmergencyContact" component={EmergencyContactScreen} />
//        <Stack.Screen name="Permissions" component={PermissionsScreen} />
//       </Stack.Navigator>
//   );
// }



// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, StyleSheet } from 'react-native';
// import HomeScreen from '../screens/home/HomeScreen';
// import TripsScreen from '../screens/trip/TripScreen';
// import SafetyScreen from '../screens/safety/SafetyScreen';
// import ProfileScreen from '../screens/profile/ProfileScreen';

// const Tab = createBottomTabNavigator();

// const HomeIcon = ({ focused }: { focused: boolean }) => (
//   <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
//     <View style={[styles.homeIcon, focused && styles.homeIconActive]}>
//       <View style={styles.homeRoof} />
//       <View style={styles.homeBase} />
//       <View style={styles.homeDoor} />
//     </View>
//   </View>
// );

// const TripsIcon = ({ focused }: { focused: boolean }) => (
//   <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
//     <View style={styles.locationPinWrapper}>
//       <View style={[styles.tripPinOuter, focused && styles.tripPinOuterActive]}>
//         <View style={styles.tripPinInner} />
//       </View>
//       <View style={[styles.tripPinBottom, focused && styles.tripPinBottomActive]} />
//     </View>
//   </View>
// );

// const SafetyIcon = ({ focused }: { focused: boolean }) => (
//   <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
//     <View style={styles.shieldWrapper}>
//       <View style={[styles.shieldTopTriangle, focused && styles.shieldTopTriangleActive]} />
//       <View style={[styles.shieldBottomShape, focused && styles.shieldBottomShapeActive]} />
//     </View>
//   </View>
// );

// const ProfileIcon = ({ focused }: { focused: boolean }) => (
//   <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
//     <View style={styles.profileWrapper}>
//       <View style={[styles.profileHead, focused && styles.profileHeadActive]} />
//       <View style={[styles.profileBody, focused && styles.profileBodyActive]} />
//     </View>
//   </View>
// );

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: styles.tabBar,
//         tabBarShowLabel: true,
//         tabBarActiveTintColor: '#2196F3',
//         tabBarInactiveTintColor: '#9E9E9E',
//         tabBarLabelStyle: styles.tabBarLabel,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Trips"
//         component={TripsScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TripsIcon focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Safety"
//         component={SafetyScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <SafetyIcon focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 70,
//     paddingBottom: 10,
//     paddingTop: 10,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//   },
//   tabBarLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     marginTop: 4,
//   },
//   iconContainer: {
//     width: 28,
//     height: 28,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconContainerActive: {
//     transform: [{ scale: 1.1 }],
//   },
//   // Home Icon
//   homeIcon: {
//     width: 24,
//     height: 24,
//     position: 'relative',
//   },
//   homeIconActive: {},
//   homeRoof: {
//     width: 0,
//     height: 0,
//     backgroundColor: 'transparent',
//     borderStyle: 'solid',
//     borderLeftWidth: 12,
//     borderRightWidth: 12,
//     borderBottomWidth: 10,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderBottomColor: '#2196F3',
//     position: 'absolute',
//     top: 0,
//   },
//   homeBase: {
//     width: 20,
//     height: 14,
//     backgroundColor: '#2196F3',
//     position: 'absolute',
//     top: 9,
//     left: 2,
//   },
//   homeDoor: {
//     width: 6,
//     height: 8,
//     backgroundColor: '#fff',
//     position: 'absolute',
//     bottom: 1,
//     left: 9,
//   },
//   // Trips Icon
//   locationPinWrapper: {
//     alignItems: 'center',
//   },
//   tripPinOuter: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#9E9E9E',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: -3,
//   },
//   tripPinOuterActive: {
//     backgroundColor: '#2196F3',
//   },
//   tripPinInner: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#fff',
//   },
//   tripPinBottom: {
//     width: 0,
//     height: 0,
//     backgroundColor: 'transparent',
//     borderStyle: 'solid',
//     borderLeftWidth: 5,
//     borderRightWidth: 5,
//     borderTopWidth: 8,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderTopColor: '#9E9E9E',
//   },
//   tripPinBottomActive: {
//     borderTopColor: '#2196F3',
//   },
//   // Safety Icon (Shield)
//   shieldWrapper: {
//     width: 22,
//     height: 24,
//     alignItems: 'center',
//   },
//   shieldTopTriangle: {
//     width: 0,
//     height: 0,
//     backgroundColor: 'transparent',
//     borderStyle: 'solid',
//     borderLeftWidth: 11,
//     borderRightWidth: 11,
//     borderBottomWidth: 10,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderBottomColor: '#9E9E9E',
//   },
//   shieldTopTriangleActive: {
//     borderBottomColor: '#2196F3',
//   },
//   shieldBottomShape: {
//     width: 22,
//     height: 14,
//     backgroundColor: '#9E9E9E',
//     borderBottomLeftRadius: 11,
//     borderBottomRightRadius: 11,
//   },
//   shieldBottomShapeActive: {
//     backgroundColor: '#2196F3',
//   },
//   // Profile Icon
//   profileWrapper: {
//     alignItems: 'center',
//   },
//   profileHead: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#9E9E9E',
//     marginBottom: 2,
//   },
//   profileHeadActive: {
//     backgroundColor: '#2196F3',
//   },
//   profileBody: {
//     width: 18,
//     height: 12,
//     backgroundColor: '#9E9E9E',
//     borderTopLeftRadius: 9,
//     borderTopRightRadius: 9,
//   },
//   profileBodyActive: {
//     backgroundColor: '#2196F3',
//   },
// });



// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useEffect, useState } from "react";

// import SplashScreen from "../screens/SplashScreen";
// import OnboardingScreen from "../screens/onBoarding/OnboardingScreen";
// import AuthNavigator from "./AuthNavigator";
// import MainNavigator from "./TabNavigator";

// const Stack = createNativeStackNavigator();

// export default function RootNavigator() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   if (isLoading) {
//     return <SplashScreen />;
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!isAuthenticated ? (
//         <>
//           <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//           <Stack.Screen name="Auth" component={AuthNavigator} />
//         </>
//       ) : (
//         <Stack.Screen name="Main" component={MainNavigator} />
//       )}
//     </Stack.Navigator>
//   );
// }




// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useEffect, useState } from "react";

// import SplashScreen from "../screens/SplashScreen";
// import OnboardingScreen from "../screens/onBoarding/OnboardingScreen";
// import AuthNavigator from "./AuthNavigator";
// import MainNavigator from "./TabNavigator";

// const Stack = createNativeStackNavigator();

// export default function RootNavigator() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   if (isLoading) {
//     return <SplashScreen />;
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!isAuthenticated ? (
//         <>
//           <Stack.Screen name="Onboarding">
//             {(props) => (
//               <OnboardingScreen
//                 {...props}
//                 onFinish={() => setIsAuthenticated(true)}
//               />
//             )}
//           </Stack.Screen>

//           <Stack.Screen name="Auth">
//             {(props) => (
//               <AuthNavigator
//                 {...props}
//                 onAuthSuccess={() => setIsAuthenticated(true)}
//               />
//             )}
//           </Stack.Screen>
//         </>
//       ) : (
//         <Stack.Screen name="Main" component={MainNavigator} />
//       )}
//     </Stack.Navigator>
//   );
// }


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/onBoarding/OnboardingScreen";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./TabNavigator";
import ExpensesScreen from "../screens/expenses/ExpensesScreen";
import StartTripScreen from "../screens/trip/StartTripScreen";
import TripScreen from "../screens/trip/TripScreen";
import { getToken, getUser } from "../utils/secureStorage";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setUser } = useAuth()

  useEffect(() => {
    const bootstrapAuth = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token);
      const user = await getUser();
      if(user) setUser(user);
      setIsLoading(false);
    };

    bootstrapAuth();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Onboarding">
            {(props) => (
              <OnboardingScreen
                {...props}
                onFinish={() => {}}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Auth">
            {(props) => (
              <AuthNavigator
                {...props}
                onAuthSuccess={() => setIsAuthenticated(true)}
              />
            )}
          </Stack.Screen>
        </>
      ) : (
        <>
        <Stack.Screen name="Main" component={MainNavigator} />
      
      <Stack.Screen
            name="Expenses"
            component={ExpensesScreen}
            options={{
              animation: "slide_from_right", // optional but nice
            }}
          />

        <Stack.Screen name="startTrip" component={StartTripScreen} options={{
              animation: "slide_from_right", // optional but nice
            }} />   

             <Stack.Screen name="Trip" component={TripScreen} options={{
              animation: "slide_from_right", // optional but nice
            }} />    

             
     
      

      </>
      )}
    </Stack.Navigator>
  );
}
