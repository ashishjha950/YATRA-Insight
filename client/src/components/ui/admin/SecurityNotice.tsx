import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme/adminTheme';

export const SecurityNotice: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.bold}>Security Notice: </Text>
        All admin activities are logged and monitored.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange + '15',
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.orange + '30',
  },
  text: {
    fontSize: 13,
    color: colors.gray[700],
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
    color: colors.gray[900],
  },
});