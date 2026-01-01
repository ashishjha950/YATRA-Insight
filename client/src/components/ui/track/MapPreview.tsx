import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MapPreview() {
  return (
    <View style={styles.map}>
      <Text style={styles.mapText}>Map View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 280,
    backgroundColor: '#E8F2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: '#9DB4D1',
    fontSize: 16,
  },
});
