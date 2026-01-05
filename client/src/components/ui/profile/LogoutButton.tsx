// src/components/profile/LogoutButton.tsx

import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LogoutButtonProps {
  onPress: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.logoutButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name="log-out-outline" size={20} color="#F44336" />
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: '#F44336',
    marginBottom: 20,
    marginHorizontal: 16,
    shadowColor: '#F44336',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  logoutText: {
    color: '#F44336',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default LogoutButton;