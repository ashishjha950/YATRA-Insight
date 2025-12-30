import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type SettingItemProps = {
  title: string;
  badge?: string | number;
  danger?: boolean;
  onPress?: () => void;
};

export default function SettingItem({
  title,
  badge,
  danger = false,
  onPress,
}: SettingItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.row}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.icon,
            danger && styles.iconDanger,
          ]}
        />
        <Text
          style={[
            styles.title,
            danger && styles.titleDanger,
          ]}
        >
          {title}
        </Text>
      </View>

      <View style={styles.right}>
        {badge !== undefined && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <Text
          style={[
            styles.arrow,
            danger && styles.arrowDanger,
          ]}
        >
          ›
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  icon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#E3F2FD',
  },

  iconDanger: {
    backgroundColor: '#FDECEC',
  },

  title: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },

  titleDanger: {
    color: '#D32F2F',
    fontWeight: '600',
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2196F3',
  },

  arrow: {
    fontSize: 22,
    color: '#9E9E9E',
  },

  arrowDanger: {
    color: '#D32F2F',
  },
});
