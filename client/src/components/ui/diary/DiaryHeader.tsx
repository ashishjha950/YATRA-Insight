// components/diary/DiaryHeader.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DiaryHeaderProps } from '../../../types/diary.types';
import { useNavigation } from '@react-navigation/native';

const DiaryHeader: React.FC<DiaryHeaderProps> = ({ isGridView, onToggleView }) => {

    const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Travel Diary</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity
          style={[styles.iconButton, isGridView && styles.iconButtonActive]}
          onPress={onToggleView}
        >
          <Ionicons name="grid-outline" size={20} color={isGridView ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, !isGridView && styles.iconButtonActive]}
          onPress={onToggleView}
        >
          <Ionicons name="list-outline" size={20} color={!isGridView ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    marginLeft: 8,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonActive: {
    backgroundColor: '#2196F3',
  },
});

export default DiaryHeader;