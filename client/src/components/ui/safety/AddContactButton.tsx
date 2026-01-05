// src/components/ui/safety/AddContactButton.tsx

import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AddContactButtonProps {
  title: string;
  onPress?: () => void;
  color?: string;
}

const AddContactButton: React.FC<AddContactButtonProps> = ({
  title,
  onPress,
  color = '#2196F3',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name="add" size={20} color={color} />
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    marginBottom: 16,
    gap: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default AddContactButton;