// src/components/profile/SettingItem.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SettingItemProps } from '../../../types/profile.types';

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  icon,
  iconBgColor = '#E8F2FF',
  badge,
  danger = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.settingRow}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.settingLeft}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          {icon && (
            <Ionicons
              name={icon as any}
              size={20}
              color={danger ? '#F44336' : '#2196F3'}
            />
          )}
        </View>
        <Text style={[styles.settingText, danger && styles.dangerText]}>
          {title}
        </Text>
      </View>

      <View style={styles.settingRight}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <Ionicons name="chevron-forward" size={20} color="#9E9E9E" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
    flex: 1,
  },
  dangerText: {
    color: '#F44336',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    backgroundColor: '#E8F2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#2196F3',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default SettingItem;