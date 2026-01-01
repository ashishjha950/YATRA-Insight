// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { recentTrips } from '../../../constants/homeData';

// export default function RecentActivityList() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Recent Activity</Text>

//       <FlatList
//         data={recentTrips}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View>
//               <Text style={styles.tripTitle}>{item.title}</Text>
//               <Text style={styles.meta}>
//                 {item.date} • {item.miles}
//               </Text>
//             </View>
//             <Text style={styles.price}>{item.price}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 24,
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 14,
//     padding: 14,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   tripTitle: {
//     fontWeight: '600',
//   },
//   meta: {
//     color: '#777',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   price: {
//     fontWeight: '700',
//   },
// });




import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActivityItem = ({ activity }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return '#4CAF50';
      case 'Confirmed': return '#2196F3';
      default: return '#999';
    }
  };

  return (
    <TouchableOpacity style={styles.activityItem}>
      <View style={styles.activityLeft}>
        <View style={styles.activityIconContainer}>
          <View style={styles.activityIcon}>
            <Text style={styles.activityIconText}>🏖️</Text>
          </View>
        </View>
        
        <View style={styles.activityInfo}>
          <Text style={styles.activityTitle} numberOfLines={1}>
            {activity.title}
          </Text>
          <Text style={styles.activityDate}>
            {activity.date} • {activity.distance} miles
          </Text>
          <View style={[
            styles.statusBadge, 
            { backgroundColor: getStatusColor(activity.status) + '20' }
          ]}>
            <View style={[
              styles.statusDot, 
              { backgroundColor: getStatusColor(activity.status) }
            ]} />
            <Text style={[
              styles.statusText, 
              { color: getStatusColor(activity.status) }
            ]}>
              {activity.status}
            </Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.activityPrice}>${activity.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  activityIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIconText: {
    fontSize: 20,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 6,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  activityPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
});

export default ActivityItem;
