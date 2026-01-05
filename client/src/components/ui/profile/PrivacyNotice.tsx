// src/components/profile/PrivacyNotice.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrivacyNotice: React.FC = () => {
  return (
    <View style={styles.privacyNotice}>
      <View style={styles.iconContainer}>
        <Ionicons name="shield-checkmark-outline" size={24} color="#FFA726" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Privacy Matters</Text>
        <Text style={styles.description}>
          All your trip data is stored locally on your device. We never share
          your personal information or location data with third parties without
          your explicit consent.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  privacyNotice: {
    backgroundColor: '#FFF8E1',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#FFE082',
  },
  iconContainer: {
    marginRight: 12,
    paddingTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#F57C00',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
});

export default PrivacyNotice;