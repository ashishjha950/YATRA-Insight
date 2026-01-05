// src/components/profile/ProfileStats.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatCard from './StatCard';
import { ProfileStatsProps } from '../../../types/profile.types';

const ProfileStats: React.FC<ProfileStatsProps> = ({ trips, miles, spent }) => {
  return (
    <View style={styles.statsRow}>
      <StatCard label="Trips" value={trips} />
      <StatCard label="Miles" value={miles} />
      <StatCard label="Spent" value={spent} />
    </View>
  );
};

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    marginHorizontal: 16,
  },
});

export default ProfileStats;