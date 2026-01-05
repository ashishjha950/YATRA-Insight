// src/components/ui/Divider.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DividerProps {
  marginHorizontal?: number;
}

const Divider: React.FC<DividerProps> = ({ marginHorizontal = 16 }) => {
  return <View style={[styles.divider, { marginHorizontal }]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default Divider;