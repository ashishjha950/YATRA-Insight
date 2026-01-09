import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme/adminTheme';
import { MENU_ITEMS } from '../../../constants/adminData';
import { MenuItemCard } from './MenuItemCard';

interface ControlPanelProps {
  navigation: any;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Control Panel</Text>
      
      {MENU_ITEMS.map((item, index) => (
        <MenuItemCard
          key={index}
          item={item}
          onPress={() => navigation.navigate(item.route)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray[900],
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
});
