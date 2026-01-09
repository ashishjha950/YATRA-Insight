import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme/adminTheme';

interface SystemStatusProps {
  lastUpdated?: string;
}

export const SystemStatus: React.FC<SystemStatusProps> = ({ lastUpdated }) => {
  return (
    <View style={styles.container}>
      <View style={styles.indicator}>
        <View style={styles.dot} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>All Systems Operational</Text>
        <Text style={styles.text}>
          Last updated: {lastUpdated || '2 minutes ago'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.green + '15',
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.green + '30',
  },
  indicator: {
    backgroundColor: colors.green,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.gray[900],
    marginBottom: 2,
  },
  text: {
    fontSize: 13,
    color: colors.gray[600],
  },
});
