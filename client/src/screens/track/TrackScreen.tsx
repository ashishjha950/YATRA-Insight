import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TrackHeader from '../../components/ui/track/TrackHeader';
import MapPreview from '../../components/ui/track/MapPreview';
import StatsCard from '../../components/ui/track/StatsCard';
import ControlButtons from '../../components/ui/track/ControlButtons';
import QuickActions from '../../components/ui/track/QuickActions';
import RecordButton from '../../components/ui/diary/RecordButton';

export default function TrackScreen() {
  return (
    <View style={styles.container}>
      <TrackHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MapPreview />
        <StatsCard />
        <ControlButtons />
        <QuickActions />
      </ScrollView>
      <RecordButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
});
