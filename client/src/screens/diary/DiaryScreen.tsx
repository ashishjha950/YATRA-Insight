// screens/diary/DiaryScreen.tsx

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DiaryHeader from '../../components/ui/diary/DiaryHeader';
import StatsCard from '../../components/ui/diary/StatsCard';
import ListCard from '../../components/ui/diary/ListCard';
import GridCard from '../../components/ui/diary/GridCard';
import FloatingActionButtons from '../../components/ui/diary/FloatingActionButtons';
import RecordButton from '../../components/ui/diary/RecordButton';
import { diaryEntries } from '../../constants/diaryData';
import { StatusBar } from 'expo-status-bar';

const DiaryScreen: React.FC = () => {
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
  <View style={styles.container}>
    {/* Header wrapper with spacing */}
      
      <StatusBar style="dark" />

      <DiaryHeader
        isGridView={isGridView}
        onToggleView={toggleView}
      />

    <ScrollView
      style={styles.content}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <StatsCard />

      {isGridView ? (
        <View style={styles.gridContainer}>
          {diaryEntries.map((entry) => (
            <GridCard key={entry.id} entry={entry} />
          ))}
        </View>
      ) : (
        <View style={styles.listContainer}>
          {diaryEntries.map((entry) => (
            <ListCard key={entry.id} entry={entry} />
          ))}
        </View>
      )}
    </ScrollView>

    <FloatingActionButtons />
    <RecordButton />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 36
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: 16,         
    paddingHorizontal: 16,
    paddingBottom: 100,      
  },

  listContainer: {
    gap: 12,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});


export default DiaryScreen;