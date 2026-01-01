// components/diary/StatsCard.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatItem from './StatItem';

const StatsCard: React.FC = () => {
  return (
    <View style={styles.statsCard}>
      <StatItem icon="image-outline" number="247" label="Photos" />
      <View style={styles.statDivider} />
      <StatItem icon="location-outline" number="12" label="Trips" />
      <View style={styles.statDivider} />
      <StatItem icon="earth-outline" number="5" label="Countries" />
    </View>
  );
};

const styles = StyleSheet.create({
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#00BCD4',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 20,
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 8,
  },
});

export default StatsCard;