import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Typography } from '../contants/typograpghy';
import { Colors } from '../contants/theme';

interface Props {
  icon: string;
  color: string;
  title: string;
  description: string;
}

export const OnboardingSlide = ({ icon, color, title, description }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconCircle, { backgroundColor: color }]}>
        <Icon name={icon} size={32} color={Colors.white} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    ...Typography.heading,
    marginBottom: 12,
  },
  description: {
    ...Typography.subHeading,
    textAlign: 'center',
    color: Colors.textSecondary,
  },
});
