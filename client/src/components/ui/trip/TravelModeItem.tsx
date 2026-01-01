import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TravelModeItem({ item, selected, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, selected && styles.active]}
    >
      <Ionicons
        name={item.icon}
        size={24}
        color={selected ? '#2196F3' : '#9E9E9E'}
      />
      <Text style={[styles.label, selected && styles.activeLabel]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 72,
    height: 72,
    borderRadius: 14,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  active: {
    borderColor: '#2196F3',
    backgroundColor: '#F5FAFF',
  },
  label: {
    fontSize: 12,
    color: '#777',
  },
  activeLabel: {
    color: '#2196F3',
    fontWeight: '600',
  },
});
