// components/diary/GridCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DiaryCardProps } from '../../../types/diary.types';

const GridCard: React.FC<DiaryCardProps> = ({ entry }) => {
  return (
    <View style={[styles.gridCard, { backgroundColor: entry.iconBg }]}>
      <View style={styles.gridIconContainer}>
        <Ionicons name={entry.icon as any} size={32} color={entry.iconColor} />
      </View>
      <Text style={styles.gridTitle} numberOfLines={2}>
        {entry.title}
      </Text>
      <Text style={styles.gridTime}>{entry.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gridCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gridIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
    minHeight: 40,
  },
  gridTime: {
    fontSize: 12,
    color: '#9E9E9E',
  },
});

export default GridCard;