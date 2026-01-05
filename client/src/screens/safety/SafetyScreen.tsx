// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// const contacts = [
//   {
//     id: '1',
//     name: 'John Smith',
//     relation: 'Spouse',
//   },
//   {
//     id: '2',
//     name: 'Sarah Johnson',
//     relation: 'Parent',
//   },
// ];

// export default function SafetyScreen() {
//   const handleSOS = () => {
//     console.log('SOS Activated');
//   };

//   const handleCall = (name: string) => {
//     console.log('Calling', name);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />

//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Safety & SOS</Text>
//       </View>

//       {/* SOS Card */}
//       <TouchableOpacity style={styles.sosCard} onPress={handleSOS}>
//         <View style={styles.sosCircleOuter}>
//           <View style={styles.sosCircleInner}>
//             <Text style={styles.sosIcon}>!</Text>
//           </View>
//         </View>

//         <Text style={styles.sosTitle}>Emergency SOS</Text>
//         <Text style={styles.sosSubtitle}>
//           Press to activate emergency alert
//         </Text>
//       </TouchableOpacity>

//       {/* Emergency Contacts */}
//       <Text style={styles.sectionTitle}>Emergency Contacts</Text>

//       <FlatList
//         data={contacts}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 24 }}
//         renderItem={({ item }) => (
//           <View style={styles.contactCard}>
//             <View style={styles.contactLeft}>
//               <View style={styles.phoneIcon}>
//                 <Text style={styles.phoneEmoji}>📞</Text>
//               </View>
//               <View>
//                 <Text style={styles.contactName}>{item.name}</Text>
//                 <Text style={styles.contactRelation}>{item.relation}</Text>
//               </View>
//             </View>

//             <TouchableOpacity
//               style={styles.callButton}
//               onPress={() => handleCall(item.name)}
//             >
//               <Text style={styles.callButtonText}>Call</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F8FA',
//     paddingHorizontal: 16,
//   },

//   header: {
//     paddingTop: 60,
//     paddingBottom: 16,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },

//   sosCard: {
//     backgroundColor: '#E63946',
//     borderRadius: 20,
//     paddingVertical: 28,
//     alignItems: 'center',
//     marginBottom: 24,
//     shadowColor: '#E63946',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.4,
//     shadowRadius: 12,
//     elevation: 6,
//   },
//   sosCircleOuter: {
//     width: 110,
//     height: 110,
//     borderRadius: 55,
//     backgroundColor: 'rgba(255,255,255,0.25)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   sosCircleInner: {
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     backgroundColor: '#E63946',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sosIcon: {
//     fontSize: 32,
//     color: '#fff',
//     fontWeight: '800',
//   },
//   sosTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#fff',
//     marginBottom: 6,
//   },
//   sosSubtitle: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.9)',
//   },

//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1A1A1A',
//     marginBottom: 12,
//   },

//   contactCard: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 14,
//     marginBottom: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   contactLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   phoneIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#E8F2FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   phoneEmoji: {
//     fontSize: 18,
//   },
//   contactName: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#1A1A1A',
//   },
//   contactRelation: {
//     fontSize: 13,
//     color: '#9E9E9E',
//   },
//   callButton: {
//     backgroundColor: '#2EC4B6',
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   callButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });




import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import SafetyHeader from '../../components/ui/safety/SafetyHeader';
import SosCard from '../../components/ui/safety/SosCard';
import ContactCard from '../../components/ui/safety/ContactCard';
import SafetyTipsCard from '../../components/ui/safety/SafetyTipsCard';
import { getEmergencyContacts, deleteEmergencyContact } from '../../services/sos.service';
import AddContactButton from '../../components/ui/safety/AddContactButton';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function SafetyScreen() {

  const navigation = useNavigation<any>();

   const [emergencyContacts, setEmergencyContacts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const contacts = await getEmergencyContacts();
        setEmergencyContacts(
      Array.isArray(contacts) ? contacts : []
    );
    } catch (err) {
      console.log('Failed to fetch emergency contacts', err);
      setEmergencyContacts([]);
    } finally {
      setLoading(false);
    }
  };

const handleDeleteContact = async (id: string) => {
  try {
    await deleteEmergencyContact(id);
    setEmergencyContacts((prev) =>
      prev.filter((c) => c._id !== id)
    );
  } catch (err) {
    Alert.alert('Error', 'Failed to delete contact');
  }
};


  useFocusEffect(
    useCallback(() => {
      fetchContacts();
    }, [])
  );

   const handleAddEmergencyContact = () => {
    console.log('Add Emergency Contact');
      navigation.navigate('AddEmergencyContact')
    // Navigate to add emergency contact screen
  };

  const handleAddTrustedContact = () => {
    console.log('Add Trusted Contact');
     navigation.navigate('AddTrustedContact')
    // Navigate to add trusted contact screen
  };

  return (
    <View style={styles.container}>
      <SafetyHeader />

      {/* <FlatList
        ListHeaderComponent={
          <>
            <SosCard />

             <Text style={styles.section}>Emergency Contacts</Text>
            {emergencyContacts.map(c => (
              <ContactCard key={c.id} {...c} color="#26C6DA" />
            ))}
            <AddContactButton
              title="Add Emergency Contact"
              onPress={handleAddEmergencyContact}
              color="#9E9E9E"
            /> 


            
            <Text style={styles.section}>Emergency Contacts</Text>

            {loading && <Text>Loading contacts...</Text>}

            {!loading && emergencyContacts.length === 0 && (
              <Text style={styles.emptyText}>No emergency contacts added</Text>
            )}

            {emergencyContacts.map((c) => (
              <ContactCard
                key={c._id}              // ✅ FIXED
                name={c.name}
                relation={c.relation}
                phone={c.phone}
                color="#26C6DA"
              />
            ))}

            <AddContactButton
              title="Add Emergency Contact"
              onPress={handleAddEmergencyContact}
              color="#9E9E9E"
            />

            <Text style={styles.section}>Trusted Contacts</Text>
            {trustedContacts.map(c => (
              <ContactCard key={c.id} {...c} color="#2196F3" />
            ))}
            <AddContactButton
              title="Add Trusted Contact"
              onPress={handleAddTrustedContact}
              color="#2196F3"
            />

            <Text style={styles.section}>Nearest Help Centers</Text>
          </>
        }
        data={helpCenters}
        renderItem={({ item }) => <HelpCenterCard {...item} />}
        keyExtractor={item => item.id}
        ListFooterComponent={<SafetyTipsCard />}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      /> */}


       <FlatList
        data={emergencyContacts}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            <SosCard />
            <Text style={styles.section}>Emergency Contacts</Text>
          </>
        }
        renderItem={({ item }) =>{
          return (
          <ContactCard
          id={item._id}
            name={item.name}
            relation={item.relation}
            phone={item.phone}
            color="#26C6DA"
            onDelete={handleDeleteContact}
          />
        )}}
        ListFooterComponent={
          <>
            <AddContactButton
              title="Add Emergency Contact"
              onPress={handleAddEmergencyContact}
              color="#9E9E9E"
            />
            <SafetyTipsCard />
          </>
        }
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  content: { paddingHorizontal: 16, paddingBottom: 40 },
  section: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 16,
  },
    emptyText: {
    color: '#9E9E9E',
    marginBottom: 8,
  },
});
