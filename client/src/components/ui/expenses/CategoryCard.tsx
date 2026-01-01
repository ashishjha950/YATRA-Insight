import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CategoryCard({ item }: any) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={22} color="#1a1a1a" />
      </View>

      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.amount}>₹{item.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
