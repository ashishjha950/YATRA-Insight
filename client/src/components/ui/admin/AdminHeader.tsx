import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../../../theme/adminTheme';

interface AdminHeaderProps {
  admin?: {
    id: string;
    email: string;
    role: string;
  } | null;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ admin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
          <View style={styles.shieldIcon}>
            <Ionicons name="shield-checkmark" size={28} color="white" />
          </View>
          <View>
            <Text style={styles.title}>Admin Dashboard</Text>
            <Text style={styles.subtitle}>
              Tourism & Safety Management
            </Text>
          </View>
        </View>
        <View style={styles.userIcon}>
          <Ionicons name="person" size={24} color="white" />
        </View>
      </View>
      
      <View style={styles.badge}>
        <View style={styles.statusDot} />
        <Text style={styles.badgeText}>System Administrator</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  left: {
    flexDirection: 'row',
    gap: spacing.md,
    flex: 1,
  },
  shieldIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: spacing.sm,
    borderRadius: 12,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  userIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: spacing.sm,
    borderRadius: 12,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
    alignSelf: 'flex-start',
    gap: spacing.xs,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.green,
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
