// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StatusBar } from 'expo-status-bar';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" />
      
//       {/* Header with Gradient */}
//       <LinearGradient
//         colors={['#1976D2', '#1565C0']}
//         style={styles.header}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         <View style={styles.headerContent}>
//           <View>
//             <Text style={styles.greeting}>Hi, Ishant 👋</Text>
//             <View style={styles.locationRow}>
//               <View style={styles.locationIcon}>
//                 <View style={styles.locationPinSmall}>
//                   <View style={styles.locationPinSmallOuter}>
//                     <View style={styles.locationPinSmallInner} />
//                   </View>
//                   <View style={styles.locationPinSmallBottom} />
//                 </View>
//               </View>
//               <Text style={styles.location}>San Francisco, CA</Text>
//             </View>
//           </View>

//           <View style={styles.weatherCard}>
//             <View style={styles.cloudIcon}>
//               <View style={styles.cloudShape} />
//             </View>
//             <Text style={styles.weatherText}>Partly Cloudy</Text>
//             <View style={styles.temperatureIcon}>
//               <View style={styles.thermometer} />
//             </View>
//             <Text style={styles.temperature}>72°F</Text>
//           </View>
//         </View>

//         <View style={styles.searchContainer}>
//           <View style={styles.searchIcon}>
//             <View style={styles.searchCircle} />
//             <View style={styles.searchHandle} />
//           </View>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search destinations, trips, places"
//             placeholderTextColor="#999"
//           />
//         </View>
//       </LinearGradient>

//       <ScrollView style={styles.content}>
//         {/* Map Preview Card */}
//         <View style={styles.mapCard}>
//           <View style={styles.mapPlaceholder}>
//             <View style={styles.activeIndicator} />
//           </View>
//         </View>

//         {/* Quick Actions */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Quick Actions</Text>
//           <View style={styles.quickActions}>
//             <TouchableOpacity style={styles.actionButton}>
//               <View style={[styles.actionIconContainer, { backgroundColor: '#E3F2FD' }]}>
//                 <View style={styles.navigationIcon}>
//                   <View style={styles.navigationArrow} />
//                 </View>
//               </View>
//               <Text style={styles.actionLabel}>Start{'\n'}Trip</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.actionButton}>
//               <View style={[styles.actionIconContainer, { backgroundColor: '#FFF3E0' }]}>
//                 <View style={styles.dollarIcon}>
//                   <Text style={styles.dollarSign}>$</Text>
//                 </View>
//               </View>
//               <Text style={styles.actionLabel}>Expenses</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.actionButton}>
//               <View style={[styles.actionIconContainer, { backgroundColor: '#FFEBEE' }]}>
//                 <View style={styles.safetyShieldIcon}>
//                   <View style={styles.safetyShieldTop} />
//                   <View style={styles.safetyShieldBottom} />
//                 </View>
//               </View>
//               <Text style={styles.actionLabel}>Safety</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.actionButton}>
//               <View style={[styles.actionIconContainer, { backgroundColor: '#E0F7FA' }]}>
//                 <View style={styles.cameraIconSmall}>
//                   <View style={styles.cameraBodySmall} />
//                   <View style={styles.cameraLensSmall} />
//                 </View>
//               </View>
//               <Text style={styles.actionLabel}>Diary</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     paddingTop: 60,
//     paddingBottom: 24,
//     paddingHorizontal: 24,
//     borderBottomLeftRadius: 24,
//     borderBottomRightRadius: 24,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   greeting: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   locationRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//   },
//   locationIcon: {
//     width: 16,
//     height: 16,
//   },
//   locationPinSmall: {
//     alignItems: 'center',
//   },
//   locationPinSmallOuter: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: -2,
//   },
//   locationPinSmallInner: {
//     width: 5,
//     height: 5,
//     borderRadius: 2.5,
//     backgroundColor: '#1976D2',
//   },
//   locationPinSmallBottom: {
//     width: 0,
//     height: 0,
//     backgroundColor: 'transparent',
//     borderStyle: 'solid',
//     borderLeftWidth: 3,
//     borderRightWidth: 3,
//     borderTopWidth: 5,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderTopColor: '#fff',
//   },
//   location: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   weatherCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     gap: 6,
//   },
//   cloudIcon: {
//     width: 20,
//     height: 16,
//   },
//   cloudShape: {
//     width: 20,
//     height: 12,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//   },
//   weatherText: {
//     fontSize: 14,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   temperatureIcon: {
//     width: 16,
//     height: 16,
//     marginLeft: 4,
//   },
//   thermometer: {
//     width: 4,
//     height: 12,
//     backgroundColor: '#fff',
//     borderRadius: 2,
//     marginTop: 2,
//   },
//   temperature: {
//     fontSize: 14,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     gap: 12,
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//     position: 'relative',
//   },
//   searchCircle: {
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     borderWidth: 2,
//     borderColor: '#999',
//   },
//   searchHandle: {
//     width: 6,
//     height: 2,
//     backgroundColor: '#999',
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     transform: [{ rotate: '45deg' }],
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#1a1a1a',
//   },
//   content: {
//     flex: 1,
//   },
//   mapCard: {
//     margin: 16,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   mapPlaceholder: {
//     width: '100%',
//     height: 150,
//     backgroundColor: '#F5F5F5',
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeIndicator: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//   },
//   section: {
//     paddingHorizontal: 16,
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     marginBottom: 16,
//   },
//   quickActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap: 12,
//   },
//   actionButton: {
//     flex: 1,
//     alignItems: 'center',
//     gap: 8,
//   },
//   actionIconContainer: {
//     width: 64,
//     height: 64,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   navigationIcon: {
//     width: 24,
//     height: 24,
//   },
//   navigationArrow: {
//     width: 0,
//     height: 0,
//     backgroundColor: 'transparent',
//     borderStyle: 'solid',
//     borderLeftWidth: 10,
//     borderRightWidth: 10,
//     borderBottomWidth: 18,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderBottomColor: '#2196F3',
//     transform: [{ rotate: '45deg' }],
//   },
//   dollarIcon: {
//     width: 28,
//     height: 28,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dollarSign: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FFA726',
//   },
//   safetyShieldIcon: {
//     width: 24,
//     height: 28,
//     alignItems: 'center',
//   },
//   safetyShieldTop: {
//     width: 0,
//     height: 0,
//     backgroundColor: 'transparent',
//     borderStyle: 'solid',
//     borderLeftWidth: 12,
//     borderRightWidth: 12,
//     borderBottomWidth: 12,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderBottomColor: '#F44336',
//   },
//   safetyShieldBottom: {
//     width: 24,
//     height: 16,
//     backgroundColor: '#F44336',
//     borderBottomLeftRadius: 12,
//     borderBottomRightRadius: 12,
//   },
//   cameraIconSmall: {
//     width: 28,
//     height: 24,
//     position: 'relative',
//   },
//   cameraBodySmall: {
//     width: 28,
//     height: 20,
//     backgroundColor: '#26C6DA',
//     borderRadius: 4,
//     marginTop: 4,
//   },
//   cameraLensSmall: {
//     position: 'absolute',
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#fff',
//     top: 8,
//     left: 8,
//   },
//   actionLabel: {
//     fontSize: 13,
//     fontWeight: '500',
//     color: '#1a1a1a',
//     textAlign: 'center',
//     lineHeight: 16,
//   },
// });



// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';

// import HomeHeader from '../../components/ui/Home/HomeHeader';
// import ActiveTripCard from '../../components/ui/Home/ActiveTripCard';
// import QuickActions from '../../components/ui/Home/QuickActions';
// import RecommendedList from '../../components/ui/Home/RecommendedList';
// import RecentActivityList from '../../components/ui/Home/RecentActivityList';

// export default function HomeScreen() {
//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <HomeHeader />
//       <ActiveTripCard />
//       <QuickActions />
//       <RecommendedList />
//       <RecentActivityList />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F6FA',
//   },
// });




// import React from 'react';
// import { FlatList, StyleSheet } from 'react-native';

// import HomeHeader from '../../components/ui/Home/Header';
// import ActiveTripCard from '../../components/ui/Home/ActiveTripCard';
// import QuickActions from '../../components/ui/Home/QuickActionItem';
// import RecommendedList from '../../components/ui/Home/RecommendedCard';
// import TripItem from '../../components/ui/Home/TripItem';

// import { recentTrips } from '../../constants/homeData';

// export default function HomeScreen() {
//   return (
//     <FlatList
//       data={recentTrips}
//       keyExtractor={(item) => item.id}
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={styles.container}
//       ListHeaderComponent={
//         <>
//           <HomeHeader />
//           <ActiveTripCard />
//           <QuickActions />
//           <RecommendedList />
//         </>
//       }
//       renderItem={({ item }) => <TripItem trip={item} />}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingBottom: 40,
//     backgroundColor: '#F5F6FA',
//   },
// });




// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Header from '../../components/ui/Home/Header';
// import ActiveTripCard from '../../components/ui/Home/ActiveTripCard';
// import QuickActions from '../../components/ui/Home/QuickActions';
// import RecommendedSection from '../../components/ui/Home/RecommendedSection';
// import RecentActivitySection from '../../components/ui/Home/RecentActivitySection';
// import RecordButton from '../../components/ui/diary/RecordButton';


// export default function HomeScreen() {
//   const [activeTab, setActiveTab] = useState('home');

//   const userData = {
//     name: 'Ishant',
//     location: 'San Francisco, CA',
//     weather: {
//       condition: 'Partly Cloudy',
//       temp: 72
//     }
//   };

//   const activeTrip = {
//     title: 'Exploring Jaipur',
//     day: 2,
//     totalDays: 5,
//     placesVisited: 3,
//     progress: 40
//   };

//   const recommendations = [
//     { id: '1', name: 'Yosemite National Park', distance: 245, rating: 4.9 },
//     { id: '2', name: 'Big Sur Coast', distance: 178, rating: 4.8 },
//     { id: '3', name: 'Lake Tahoe', distance: 198, rating: 4.7 },
//   ];

//   const recentActivities = [
//     { 
//       id: '1', 
//       title: 'Trip to Lake Tahoe', 
//       date: 'Dec 18, 2024', 
//       distance: 245,
//       status: 'Confirmed',
//       price: 247
//     },
//     { 
//       id: '2', 
//       title: 'Weekend in Napa Valley', 
//       date: 'Dec 5, 2024', 
//       distance: 178,
//       status: 'Completed',
//       price: 189
//     },
//     { 
//       id: '3', 
//       title: 'San Diego Adventure', 
//       date: 'Nov 1, 2024', 
//       distance: 502,
//       status: 'Completed',
//       price: 432
//     },
//   ];

//   // Define sections for FlatList
//   const sections = [
//     { id: 'active-trip', type: 'active-trip', data: activeTrip },
//     { id: 'quick-actions', type: 'quick-actions' },
//     { id: 'recommended', type: 'recommended', data: recommendations },
//     { id: 'recent-activity', type: 'recent-activity', data: recentActivities },
//   ];

//   const renderSection = ({ item }) => {
//     switch (item.type) {
//       case 'active-trip':
//         return <ActiveTripCard trip={item.data} />;
//       case 'quick-actions':
//         return <QuickActions />;
//       case 'recommended':
//         return <RecommendedSection recommendations={item.data} />;
//       case 'recent-activity':
//         return <RecentActivitySection activities={item.data} />;
//       default:
//         return null;
//     }
//   };

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StatusBar } from 'expo-status-bar';
// import { getUser } from '../../utils/secureStorage';

// export default function HomeScreen() {

//   const [user,setUser] = useState();

//   const fetchData=async () => {
//     const user = await getUser();
//     setUser(user)
//     console.log(user)
//   }

//   useEffect(()=>{
//     fetchData();
//   },[])
  
// >>>>>>> 00d713a24debd200b5cf1b2970136a9d85cd5030
//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" />
//       <Header 
//         userName={userData.name}
//         location={userData.location}
//         weather={userData.weather}
//       />
      
//       <FlatList
//         data={sections}
//         renderItem={renderSection}
//         keyExtractor={item => item.id}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.flatListContent}
//         nestedScrollEnabled={true}
//         removeClippedSubviews={false}
//       />
//       {/* Header with Gradient */}
//       <LinearGradient
//         colors={['#1976D2', '#1565C0']}
//         style={styles.header}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         <View style={styles.headerContent}>
//           <View>
//             <Text style={styles.greeting}>Hi, {user?.name?user.name:"User"} 👋</Text>
//             <View style={styles.locationRow}>
//               <View style={styles.locationIcon}>
//                 <View style={styles.locationPinSmall}>
//                   <View style={styles.locationPinSmallOuter}>
//                     <View style={styles.locationPinSmallInner} />
//                   </View>
//                   <View style={styles.locationPinSmallBottom} />
//                 </View>
//               </View>
//               <Text style={styles.location}>San Francisco, CA</Text>
//             </View>
//           </View>

//       <RecordButton />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   flatListContent: {
//     paddingTop: 16,
//     paddingBottom: 100,
//   },
// });



import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '../../components/ui/Home/Header';
import ActiveTripCard from '../../components/ui/Home/ActiveTripCard';
import QuickActions from '../../components/ui/Home/QuickActions';
import RecommendedSection from '../../components/ui/Home/RecommendedSection';
import RecentActivitySection from '../../components/ui/Home/RecentActivitySection';
import RecordButton from '../../components/ui/diary/RecordButton';

import { getUser } from '../../utils/secureStorage';
import { useLocation } from '../../hooks/useLocation'
import { useWeather } from '../../hooks/useWeather'

export default function HomeScreen() {
  
  const [name, setName] = useState('User')

  // 🔹 hooks do the heavy lifting
  const { location, coords } = useLocation()
  const { weather, loading }= useWeather(
    coords?.latitude,
    coords?.longitude
)

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await getUser()
      if (storedUser?.name) {
        setName(storedUser.name)
      }
    }

    loadUser()
  }, [])


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const storedUser = await getUser();
  //     setUser(storedUser);
  //   };
  //   fetchUser();
  // }, []);

  const activeTrip = {
    title: 'Exploring Jaipur',
    day: 2,
    totalDays: 5,
    placesVisited: 3,
    progress: 40,
  };

  const recommendations = [
    { id: '1', name: 'Yosemite National Park', distance: 245, rating: 4.9 },
    { id: '2', name: 'Big Sur Coast', distance: 178, rating: 4.8 },
    { id: '3', name: 'Lake Tahoe', distance: 198, rating: 4.7 },
  ];

  const recentActivities = [
    {
      id: '1',
      title: 'Trip to Lake Tahoe',
      date: 'Dec 18, 2024',
      distance: 245,
      status: 'Completed',
      price: 247,
    },
    {
      id: '2',
      title: 'Weekend in Napa Valley',
      date: 'Dec 5, 2024',
      distance: 178,
      status: 'Completed',
      price: 189,
    },
    {
      id: '3',
      title: 'San Diego Adventure',
      date: 'Nov 1, 2024',
      distance: 502,
      status: 'Completed',
      price: 432,
    },
  ];

  const sections = [
    { id: 'active-trip', type: 'active-trip', data: activeTrip },
    { id: 'quick-actions', type: 'quick-actions' },
    { id: 'recommended', type: 'recommended', data: recommendations },
    { id: 'recent-activity', type: 'recent-activity', data: recentActivities },
  ];

  const renderSection = ({ item }: any) => {
    switch (item.type) {
      case 'active-trip':
        return <ActiveTripCard trip={item.data} />;
      case 'quick-actions':
        return <QuickActions />;
      case 'recommended':
        return <RecommendedSection recommendations={item.data} />;
      case 'recent-activity':
        return <RecentActivitySection activities={item.data} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Gradient Header Component */}
      <Header
        userName={name}
        location={location}
        weather={weather}
        loading={loading}
      />

      <FlatList
        data={sections}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Floating SOS / Record Button */}
      <RecordButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  listContent: {
    paddingBottom: 120,
  },
});
