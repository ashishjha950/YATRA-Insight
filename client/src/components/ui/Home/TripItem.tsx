import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TripItem({ trip }: any) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.meta}>
          {trip.date} • {trip.miles}
        </Text>
      </View>
      <Text style={styles.price}>{trip.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
  },
  meta: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  price: {
    fontWeight: '700',
  },
});
