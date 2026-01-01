import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TravelModeItem from './TravelModeItem';

const modes = [
  { id: 'car', icon: 'car', label: 'Car' },
  { id: 'train', icon: 'train', label: 'Train' },
  { id: 'bus', icon: 'bus', label: 'Bus' },
  { id: 'flight', icon: 'airplane', label: 'Flight' },
];

export default function TravelModeSelector() {
  const [selected, setSelected] = useState('car');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Mode</Text>
      <View style={styles.row}>
        {modes.map((item) => (
          <TravelModeItem
            key={item.id}
            item={item}
            selected={selected === item.id}
            onPress={() => setSelected(item.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
