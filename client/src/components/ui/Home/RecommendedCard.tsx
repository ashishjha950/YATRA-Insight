// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { recommendedPlaces } from '../../../constants/homeData';

// export default function RecommendedList() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Recommended for You</Text>

//       <FlatList
//         horizontal
//         data={recommendedPlaces}
//         keyExtractor={item => item.id}
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.rating}>⭐ {item.rating}</Text>
//             <Text style={styles.name}>{item.title}</Text>
//             <Text style={styles.distance}>{item.distance}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 24,
//     paddingLeft: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
//   card: {
//     width: 200,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 12,
//     marginRight: 12,
//   },
//   rating: {
//     alignSelf: 'flex-end',
//     fontSize: 12,
//   },
//   name: {
//     fontWeight: '600',
//     marginTop: 20,
//   },
//   distance: {
//     color: '#777',
//     fontSize: 12,
//     marginTop: 4,
//   },
// });


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecommendedCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.recommendedCard}>
      <View style={styles.cardImage}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>🏔️</Text>
        </View>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
        <View style={styles.cardDistance}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.distanceText}>{item.distance} miles away</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recommendedCard: {
    width: 180,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 6
  },
  cardImage: {
    width: '100%',
    height: 140,
    position: 'relative',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 48,
  },
  ratingBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  cardDistance: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationIcon: {
    fontSize: 10,
  },
  distanceText: {
    fontSize: 12,
    color: '#999',
  },
});

export default RecommendedCard;
