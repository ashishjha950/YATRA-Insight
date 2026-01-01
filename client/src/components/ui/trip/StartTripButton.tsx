import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StartTripButton() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Start Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  button: {
    backgroundColor: '#90CAF9',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
