// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function TripHeader({ title }: { title: string }) {
//   return (
//     <View style={styles.header}>
//       <TouchableOpacity>
//         <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
//       </TouchableOpacity>
//       <Text style={styles.title}>{title}</Text>
//       <View style={{ width: 24 }} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     height: 56,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//   },
//   title: {
//     flex: 1,
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const STATUS_BAR_HEIGHT =
  Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 44;

export default function TripHeader({ title }: { title: string }) {

    const navigation = useNavigation();
  return (
    <View style={[styles.header, { paddingTop: STATUS_BAR_HEIGHT }]}>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {/* Right side spacer for perfect centering */}
      <View style={{ width: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56 + (Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 44),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
});
