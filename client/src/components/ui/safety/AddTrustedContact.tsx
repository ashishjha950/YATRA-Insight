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


export default function AddTrustedContact() {

     const navigation = useNavigation();
  

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');

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
            <Text style={styles.title}>Trusted Contact</Text>
            </View>
      <Text style={styles.subtitle}>
        Trusted contacts can track your safety during trips
      </Text>

      <Text style={styles.label}>Trusted Contact Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Trusted Contact Phone</Text>
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
        placeholder="e.g. Friend, Family, Partner"
        value={relation}
        onChangeText={setRelation}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Trusted contacts can receive location updates during your journey.
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Trusted Contact</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 4
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
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
