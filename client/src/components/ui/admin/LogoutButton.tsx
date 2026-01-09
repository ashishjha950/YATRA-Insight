import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../../../theme/adminTheme';

interface LogoutButtonProps {
  onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onLogout}
      activeOpacity={0.8}
    >
      <Ionicons name="log-out-outline" size={20} color={colors.red} />
      <Text style={styles.text}>Logout Admin</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: colors.red,
    gap: spacing.sm,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.red,
  },
});