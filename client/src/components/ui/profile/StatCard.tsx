// src/components/profile/StatCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatCardProps } from '../../../types/profile.types';

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#9E9E9E',
    fontWeight: '500',
  },
});

export default StatCard;