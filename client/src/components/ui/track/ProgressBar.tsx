import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trip Progress</Text>
        <Text style={styles.percent}>{progress}%</Text>
      </View>

      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: '#F3FAFF',
    padding: 12,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  percent: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2196F3',
  },
  bar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  fill: {
    height: '100%',
    backgroundColor: '#2EC4B6',
    borderRadius: 4,
  },
});
