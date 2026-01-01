import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  item: any;
  selected: boolean;
  onPress: () => void;
};

export default function CategoryItem({ item, selected, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        selected && styles.activeCard,
      ]}
    >
      <Ionicons
        name={item.icon}
        size={22}
        color={selected ? '#2196F3' : '#999'}
      />
      <Text
        style={[
          styles.label,
          selected && styles.activeLabel,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    paddingVertical: 16,
    alignItems: 'center',
    gap: 6,
  },
  activeCard: {
    borderColor: '#2196F3',
    backgroundColor: '#F5FAFF',
  },
  label: {
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
  },
  activeLabel: {
    color: '#2196F3',
    fontWeight: '600',
  },
});
