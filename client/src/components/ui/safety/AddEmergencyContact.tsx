import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addEmergencyContact } from '../../../services/sos.service';

export default function AddEmergencyContact() {

   const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      await addEmergencyContact({ name, phone, relation });
      navigation.goBack(); // 👈 Safety screen pe wapas
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >

          <StatusBar style="dark" />

    <View style={styles.container}>
      <View style={styles.header}>
             <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
              </TouchableOpacity>
      <Text style={styles.title}>Emergency Contact</Text>
      </View>
      <Text style={styles.subtitle}>
        Add someone who can be reached in case of emergency
      </Text>

      <Text style={styles.label}>Emergency Contact Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Emergency Contact Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="+91 XXXXX XXXXX"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Relationship</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Parent, Spouse, Friend"
        value={relation}
        onChangeText={setRelation}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          <Text style={styles.infoBold}>Important:</Text> This contact will be
          notified if you trigger an SOS alert.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{loading ? 'Saving...' : 'Save Emergency Contact'}</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 3
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  arrow: {
    marginTop: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
    marginTop: 16
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
  },
  infoBox: {
    marginTop: 20,
    backgroundColor: '#FFF3CD',
    padding: 14,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 13,
    color: '#856404',
  },
  infoBold: {
    fontWeight: '700',
  },
  button: {
    marginTop: 'auto',
    backgroundColor: '#2196F3',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
