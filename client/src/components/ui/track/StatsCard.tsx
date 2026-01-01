// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import ProgressBar from './ProgressBar';
// import { liveTripStats } from '../../../constants/trackData';

// export default function StatsCard() {

//     const { distanceKm, duration, placesVisited, progressPercent } = liveTripStats;
//   return (
//     <View style={styles.card}>
//       <View style={styles.statsRow}>
//         <Stat icon="navigate" value="24.9 km" label="Distance" color="#2196F3" />
//         <Stat icon="time" value="2h 0m" label="Time" color="#2EC4B6" />
//         <Stat icon="location" value="3" label="Places" color="#FF9800" />
//       </View>

//       <ProgressBar progress={60} />
//     </View>
//   );
// }

// function Stat({ icon, value, label, color }: any) {
//   return (
//     <View style={styles.stat}>
//       <View style={[styles.iconBox, { backgroundColor: `${color}20` }]}>
//         <Ionicons name={icon} size={20} color={color} />
//       </View>
//       <Text style={styles.value}>{value}</Text>
//       <Text style={styles.label}>{label}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 16,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 16,
//     elevation: 4,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   stat: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   iconBox: {
//     width: 48,
//     height: 48,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   value: {
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   label: {
//     fontSize: 13,
//     color: '#9E9E9E',
//   },
// });




// components/ui/track/StatsCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from './ProgressBar';
import { liveTripStats } from '../../../constants/trackData';

export default function StatsCard() {
  const {
    distanceKm,
    duration,
    placesVisited,
    progressPercent,
  } = liveTripStats;

  return (
    <View style={styles.card}>
      <View style={styles.statsRow}>
        <Stat
          icon="navigate"
          value={`${distanceKm} km`}
          label="Distance"
          color="#2196F3"
        />
        <Stat
          icon="time"
          value={duration}
          label="Time"
          color="#2EC4B6"
        />
        <Stat
          icon="location"
          value={`${placesVisited}`}
          label="Places"
          color="#FF9800"
        />
      </View>

      <ProgressBar progress={progressPercent} />
    </View>
  );
}

function Stat({
  icon,
  value,
  label,
  color,
}: {
  icon: string;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <View style={styles.stat}>
      <View style={[styles.iconBox, { backgroundColor: `${color}20` }]}>
        <Ionicons name={icon as any} size={20} color={color} />
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    elevation: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
  },
  label: {
    fontSize: 13,
    color: '#9E9E9E',
  },
});
