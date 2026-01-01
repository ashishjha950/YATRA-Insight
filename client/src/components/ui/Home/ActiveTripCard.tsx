// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function ActiveTripCard() {
//   return (
//     <LinearGradient
//       colors={['#FF7043', '#E53935']}
//       style={styles.card}
//     >
//       <Text style={styles.tag}>ACTIVE TRIP</Text>
//       <Text style={styles.title}>Exploring Jaipur</Text>
//       <Text style={styles.subtitle}>Day 2 of 5 • 3 places visited</Text>

//       <View style={styles.progressBar}>
//         <View style={styles.progressFill} />
//       </View>

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>View Trip Details</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 16,
//     padding: 20,
//     borderRadius: 20,
//   },
//   tag: {
//     color: '#FFDAD4',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   title: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: '700',
//     marginTop: 4,
//   },
//   subtitle: {
//     color: '#FFECEC',
//     marginVertical: 8,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: 'rgba(255,255,255,0.3)',
//     borderRadius: 3,
//     marginVertical: 10,
//   },
//   progressFill: {
//     width: '40%',
//     height: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 3,
//   },
//   button: {
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 12,
//   },
//   buttonText: {
//     color: '#E53935',
//     fontWeight: '600',
//   },
// });


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActiveTripCard = ({ trip }) => {
  return (
    <View style={styles.activeTripCard}>
      <View style={styles.activeTripBadge}>
        <View style={styles.activeDot} />
        <Text style={styles.activeTripText}>ACTIVE TRIP</Text>
      </View>
      
      <Text style={styles.tripTitle}>{trip.title}</Text>
      <Text style={styles.tripSubtitle}>
        Day {trip.day} of {trip.totalDays} • {trip.placesVisited} places visited
      </Text>
      
      <View style={styles.tripProgress}>
        <View style={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <Text key={i} style={styles.star}>⭐</Text>
          ))}
        </View>
        <Text style={styles.progressText}>{trip.progress}% Complete</Text>
      </View>
      
      <TouchableOpacity style={styles.viewDetailsButton}>
        <Text style={styles.viewDetailsText}>View Trip Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  activeTripCard: {
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#FF6B35',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  activeTripBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  activeTripText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  tripTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  tripSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 12,
  },
  tripProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  stars: {
    flexDirection: 'row',
    gap: 4,
  },
  star: {
    fontSize: 16,
  },
  progressText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
  },
  viewDetailsButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FF6B35',
  },
});

export default ActiveTripCard;
