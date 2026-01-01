import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ControlButtons() {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.pause}>
        <Ionicons name="pause" size={18} color="#2EC4B6" />
        <Text style={styles.pauseText}>Pause</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.end}>
        <Ionicons name="stop" size={18} color="#fff" />
        <Text style={styles.endText}>End Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: 16,
    marginTop: 12,
  },
  pause: {
    flex: 1,
    backgroundColor: '#EAFBF7',
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  pauseText: {
    color: '#2EC4B6',
    fontWeight: '600',
  },
  end: {
    flex: 1,
    backgroundColor: '#E53935',
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  endText: {
    color: '#fff',
    fontWeight: '600',
  },
});
