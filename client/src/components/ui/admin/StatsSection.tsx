import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../../theme/adminTheme';
import { StatCard } from './StatCard';
import { DashboardStats } from '../../../types/admin.types';
import { colors } from '../../../theme/adminTheme';

interface StatsCardsProps {
  stats: DashboardStats;
  loading: boolean;
}

export const StatsSection: React.FC<StatsCardsProps> = ({ stats, loading }) => {
  return (
    <View style={styles.container}>
      <StatCard
        value={stats.activeTrips}
        label="Active Trips"
        loading={loading}
        color={colors.primary}
      />
      <StatCard
        value={stats.alerts}
        label="Alerts"
        loading={loading}
        color={colors.cyan}
      />
      <StatCard
        value={`${stats.uptime}%`}
        label="Uptime"
        loading={loading}
        color={colors.green}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
});