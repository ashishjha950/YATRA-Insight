// components/diary/FloatingActionButtons.tsx

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FloatingActionButtons: React.FC = () => {
  return (
    <View style={styles.fabContainer}>
      <TouchableOpacity style={[styles.fab, styles.fabCamera]}>
        <Ionicons name="camera" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.fab, styles.fabMic]}>
        <Ionicons name="mic" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.fab, styles.fabDocument]}>
        <Ionicons name="document-text" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    gap: 12,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabCamera: {
    backgroundColor: '#2196F3',
  },
  fabMic: {
    backgroundColor: '#00BCD4',
  },
  fabDocument: {
    backgroundColor: '#FFA726',
  },
});

export default FloatingActionButtons;