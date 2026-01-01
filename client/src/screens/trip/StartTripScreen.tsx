import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TripHeader from '../../components/ui/trip/TripHeader';
import GPSStatusCard from '../../components/ui/trip/GPSStatusCard';
import TripInput from '../../components/ui/trip/TripInput';
import TravelModeSelector from '../../components/ui/trip/TravelModeSelector';
import TripNoteCard from '../../components/ui/trip/TripNoteCard';
import StartTripButton from '../../components/ui/trip/StartTripButton';

export default function StartTripScreen() {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <View style={styles.container}>
      <TripHeader title="Start New Trip" />

      <ScrollView contentContainerStyle={styles.content}>
        <GPSStatusCard />

        <TripInput
          label="Trip Name"
          placeholder="e.g., Weekend Road Trip"
          value={tripName}
          onChangeText={setTripName}
        />

        <TripInput
          label="Destination (Optional)"
          placeholder="e.g., Los Angeles, CA"
          value={destination}
          onChangeText={setDestination}
        />

        <TravelModeSelector />

        <TripNoteCard />
      </ScrollView>

      <StartTripButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    padding: 16,
    paddingBottom: 120,
  },
});
