// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import QuickActionItem from './QuickActionItem';
// import { useNavigation } from '@react-navigation/native';

// const QuickActions = () => {

//      const navigation = useNavigation<any>();

//   const actions = [
//     { id: '1', icon: '✈️', label: 'Start\nTrip', color: '#E3F2FD' },
//     { id: '2', icon: '💰', label: 'Expenses', color: '#FFF3E0' },
//     { id: '3', icon: '🗺️', label: 'Track', color: '#E0F7FA' },
//     { id: '4', icon: '📔', label: 'Diary', color: '#F3E5F5' },
//      { id: '5', icon: '🛡️', label: 'Safety\nSOS', color: '#FFEBEE' },
//   ];


//    const handlePress = (route?: string) => {
//     if (!route) return;
//     navigation.navigate(route);
//   };

//   return (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Quick Actions</Text>
//       <FlatList
//         data={actions}
//         renderItem={({ item }) => (<QuickActionItem action={item} onPress={() => handlePress(item.route)} />)}
//         keyExtractor={item => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   section: {
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     marginBottom: 16,
//     paddingHorizontal: 16,
//   },
//   listContainer: {
//     paddingHorizontal: 10,
//   },
// });

// export default QuickActions;



import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuickActionItem from './QuickActionItem';

const QuickActions = () => {
  const navigation = useNavigation<any>();

  const actions = [
    { id: '1', icon: '✈️', label: 'Start\nTrip', color: '#E3F2FD', route: 'startTrip' },
    { id: '2', icon: '💰', label: 'Expenses', color: '#FFF3E0', route: 'Expenses' },
    { id: '3', icon: '🗺️', label: 'Trip', color: '#E0F7FA', route: 'Trip' },
    { id: '4', icon: '📔', label: 'Diary', color: '#F3E5F5', route: 'Diary' },
    { id: '5', icon: '🛡️', label: 'Safety\nSOS', color: '#FFEBEE', route: 'Safety' },
  ];

  const handlePress = (route?: string) => {
    if (!route) return;
    navigation.navigate(route);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <FlatList
        data={actions}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <QuickActionItem
            action={item}
            onPress={() => handlePress(item.route)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});

export default QuickActions;
