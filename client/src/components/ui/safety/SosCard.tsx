import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SosCard() {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
      <View style={styles.circle}>
        <Ionicons name="alert" size={36} color="#E53935" />
      </View>
      <Text style={styles.title}>Emergency SOS</Text>
      <Text style={styles.subtitle}>
        Press to activate emergency alert
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E53935',
    borderRadius: 20,
    paddingVertical: 32,
    alignItems: 'center',
    margin: 16,
    shadowColor: '#E53935',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
  },
  circle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255,255,255,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#FFECEC',
    marginTop: 6,
  },
});
