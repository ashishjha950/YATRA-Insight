// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import QuickActionItem from './QuickActionItem';

// export default function QuickActions() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Quick Actions</Text>

//       <View style={styles.row}>
//         <QuickActionItem label="Add Expense" icon="add" color="#FF9800" />
//         <QuickActionItem label="Add Note" icon="create" color="#2196F3" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     margin: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
//   row: {
//     flexDirection: 'row',
//     gap: 12,
//   },
// });



// components/ui/track/QuickActions.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuickActionItem from './QuickActionItem';
import { quickActions } from '../../../constants/trackData';

export default function QuickActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>

      <View style={styles.row}>
        {quickActions.map(action => (
          <QuickActionItem
            key={action.id}
            label={action.label}
            icon={action.icon}
            color={action.color}
            route={action.route}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
});
