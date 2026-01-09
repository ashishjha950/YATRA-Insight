import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { colors, spacing } from '../../../theme/adminTheme';

interface StatCardProps {
  value: number | string;
  label: string;
  loading: boolean;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, loading, color }) => {
  return (
    <View style={styles.card}>
      {loading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          <Text style={[styles.number, { color }]}>{value}</Text>
          <Text style={styles.label}>{label}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: spacing.md,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: colors.gray[500],
    fontWeight: '600',
    marginTop: 4,
  },
});
