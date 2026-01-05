// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function HomeHeader() {
//   return (
//     <LinearGradient colors={['#1976D2', '#0D47A1']} style={styles.container}>
//       <Text style={styles.greeting}>Hi, Ishant 👋</Text>
//       <Text style={styles.location}>📍 San Francisco, CA</Text>

//       <View style={styles.searchBox}>
//         <TextInput
//           placeholder="Search destinations, trips, places"
//           placeholderTextColor="#999"
//           style={styles.searchInput}
//         />
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     paddingTop: 60,
//     borderBottomLeftRadius: 24,
//     borderBottomRightRadius: 24,
//   },
//   greeting: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#fff',
//   },
//   location: {
//     color: '#E3F2FD',
//     marginVertical: 6,
//   },
//   searchBox: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     marginTop: 16,
//     paddingHorizontal: 16,
//   },
//   searchInput: {
//     height: 46,
//     fontSize: 16,
//   },
// });


import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Header = ({ userName, location, weather }) => {
  return (
    <LinearGradient
        colors={['#1976D2', '#1565C0']}
        style={styles.headers}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View>
          <Text style={styles.greeting}>Hi, {userName} 👋</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        
        <View style={styles.weatherCard}>
          <Text style={styles.weatherIcon}>☁️</Text>
          <Text style={styles.weatherText}>{weather.condition}</Text>
          <Text style={styles.temperature}>{weather.temp}°F</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search destinations, trips, places"
          placeholderTextColor="#999"
        />
      </View>
    </View>
   </LinearGradient>
  );
};

const styles = StyleSheet.create({
    headers: {
    paddingTop: 80,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 12
  },
  header: {
     flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    gap: 8
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 62
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationIcon: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  weatherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  weatherIcon: {
    fontSize: 16,
  },
  weatherText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  temperature: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 10,
  },
  searchIcon: {
    fontSize: 18,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1a1a1a',
  },
});

export default Header;