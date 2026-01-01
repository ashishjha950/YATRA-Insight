// components/diary/ListCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DiaryCardProps } from '../../../types/diary.types';

const ListCard: React.FC<DiaryCardProps> = ({ entry }) => {
  return (
    <View style={styles.listCard}>
      <View style={[styles.listIconContainer, { backgroundColor: entry.iconBg }]}>
        <Ionicons name={entry.icon as any} size={24} color={entry.iconColor} />
      </View>
      <View style={styles.listContent}>
        <Text style={styles.listTitle}>{entry.title}</Text>
        <Text style={styles.listSubtitle}>
          {entry.location} • {entry.time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listContent: {
    flex: 1,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  listSubtitle: {
    fontSize: 13,
    color: '#9E9E9E',
  },
});

export default ListCard;