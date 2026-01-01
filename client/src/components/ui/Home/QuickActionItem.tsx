// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// const actions = [
//   { id: '1', label: 'Start Trip' },
//   { id: '2', label: 'Expenses' },
//   { id: '3', label: 'Track' },
//   { id: '4', label: 'Diary' },
// ];

// export default function QuickActions() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Quick Actions</Text>
//       <FlatList
//         horizontal
//         data={actions}
//         keyExtractor={item => item.id}
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.action}>
//             <Text style={styles.icon}>◎</Text>
//             <Text style={styles.label}>{item.label}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
//   action: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     marginRight: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     fontSize: 22,
//   },
//   label: {
//     fontSize: 12,
//     marginTop: 6,
//   },
// });


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuickActionItem = ({ action, onPress }) => {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.actionIconContainer, { backgroundColor: action.color }]}>
        <Text style={styles.actionIcon}>{action.icon}</Text>
      </View>
      <Text style={styles.actionLabel}>{action.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 6,
  },
  actionIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 28,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default QuickActionItem;
