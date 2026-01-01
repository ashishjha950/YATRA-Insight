import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TripNoteCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        <Text style={styles.bold}>Note: </Text>
        Your trip will be tracked automatically. You can add expenses and notes during the journey.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF7E6',
    borderRadius: 14,
    padding: 14,
  },
  text: {
    fontSize: 13,
    color: '#777',
    lineHeight: 18,
  },
  bold: {
    fontWeight: '600',
    color: '#555',
  },
});
