import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BudgetCard() {
  const progress = 2720 / 5000;

  return (
    <LinearGradient
      colors={['#1E88E5', '#0D47A1']}
      style={styles.card}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.label}>Total Spending</Text>

      <Text style={styles.amount}>
        ₹2,720 <Text style={styles.total}>/ ₹5,000</Text>
      </Text>

      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <View style={styles.row}>
        <Text style={styles.sub}>54% of budget used</Text>
        <Text style={styles.sub}>₹2,280 remaining</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    marginBottom: 24,
  },
  label: {
    color: '#E3F2FD',
    fontSize: 14,
    marginBottom: 6,
  },
  amount: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 16,
    color: '#BBDEFB',
  },
  progressTrack: {
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 6,
    marginVertical: 14,
  },
  progressFill: {
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#FFD54F',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sub: {
    color: '#E3F2FD',
    fontSize: 13,
  },
});
