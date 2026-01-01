import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SafetyTipsCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Ionicons name="shield-checkmark" size={20} color="#2EC4B6" />
        </View>
        <Text style={styles.title}>Safe Zone</Text>
      </View>

      <Text style={styles.desc}>
        San Francisco is generally safe, but stay alert in tourist areas.
      </Text>

      {[
        'Share your trip details with trusted contacts',
        'Keep emergency numbers saved offline',
        'Stay aware of your surroundings',
        "Trust your instincts – if something feels wrong, it probably is",
      ].map((t, i) => (
        <View key={i} style={styles.tipRow}>
          <Ionicons name="information-circle" size={16} color="#26C6DA" />
          <Text style={styles.tipText}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E8F7FA',
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#CFF3EF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  title: { fontSize: 16, fontWeight: '700', color: '#1a1a1a' },
  desc: { fontSize: 14, color: '#607D8B', marginBottom: 12 },
  tipRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  tipText: { marginLeft: 8, fontSize: 14, color: '#455A64', flex: 1 },
});
