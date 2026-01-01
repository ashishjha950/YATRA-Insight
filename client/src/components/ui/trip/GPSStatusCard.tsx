import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GPSStatusCard() {
  return (
    <View style={styles.card}>
      <Ionicons name="navigate" size={22} color="#26C6DA" />
      <View>
        <Text style={styles.title}>GPS Enabled</Text>
        <Text style={styles.subtitle}>
          Current location: San Francisco, CA
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#E3F8FC',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
});
