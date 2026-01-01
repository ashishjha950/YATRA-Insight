// components/diary/StatItem.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatItemProps } from '../../../types/diary.types';
import { IconBackground } from './IconBackground';

const StatItem: React.FC<StatItemProps> = ({ icon, number, label }) => {
  return (
    <View style={styles.statItem}>
      <IconBackground>
        <Ionicons name={icon as any} size={24} color="#fff" />
      </IconBackground>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
    opacity: 0.9,
  },
});

export default StatItem;