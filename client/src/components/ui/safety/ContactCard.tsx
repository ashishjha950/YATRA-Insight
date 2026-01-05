// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function ContactCard({ name, relation, color = '#26C6DA' }: any) {
//   return (
//     <View style={styles.card}>
//       <View style={[styles.iconBox, { backgroundColor: `${color}20` }]}>
//         <Ionicons name="call" size={20} color={color} />
//       </View>

//       <View style={{ flex: 1 }}>
//         <Text style={styles.name}>{name}</Text>
//         <Text style={styles.relation}>{relation}</Text>
//       </View>

//       <TouchableOpacity style={[styles.callBtn, { backgroundColor: color }]}>
//         <Text style={styles.callText}>Call</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 16,
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   iconBox: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   name: { fontSize: 16, fontWeight: '600' },
//   relation: { fontSize: 13, color: '#9E9E9E' },
//   callBtn: {
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   callText: { color: '#fff', fontWeight: '600' },
// });



// src/components/ui/safety/ContactCard.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ContactCardProps {
    id: string;    
  name: string;
  relation: string;
  phone?: string;
  color?: string;
   onDelete?: (id: string) => void;
  onCall?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  id,
  name,
  relation,
  phone,
  color = '#26C6DA',
  onDelete,
  onCall,
}) => {

  const handleCall = async () => {
    if (onCall) {
      onCall();
      return;
    }
   if (!phone) {

       Alert.alert('Error', 'Phone number not available');
      return;
    }

       const phoneUrl = `tel:${phone}`;

   
  try {
    const supported = await Linking.canOpenURL(phoneUrl);

    if (!supported) {
      Alert.alert('Error', 'Dialer not supported on this device');
      return;
    }

    await Linking.openURL(phoneUrl);
  } catch (err) {
    Alert.alert('Error', 'Failed to open dialer');
  }

  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Contact',
      `Are you sure you want to remove ${name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDelete?.(id),
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={[styles.iconBox, { backgroundColor: `${color}20` }]}>
        <Ionicons name="call" size={22} color={color} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.relation}>{relation}</Text>
      </View>

      <TouchableOpacity
        style={[styles.callBtn, { backgroundColor: color }]}
        onPress={handleCall}
        activeOpacity={0.8}
      >
        <Text style={styles.callText}>Call</Text>
      </TouchableOpacity>

      {/* 🔴 DELETE BUTTON */}
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={handleDelete}
      >
        <Ionicons name="trash-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  relation: {
    fontSize: 13,
    color: '#9E9E9E',
  },
  callBtn: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 20,
  },
  callText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  deleteBtn: {
  marginLeft: 8,
  backgroundColor: '#F44336',
  width: 36,
  height: 36,
  borderRadius: 18,
  justifyContent: 'center',
  alignItems: 'center',
},

});

export default ContactCard;