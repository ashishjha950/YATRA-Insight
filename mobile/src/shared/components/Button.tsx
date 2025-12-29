import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Typography } from '../contants/typograpghy';
import { Colors } from '../contants/theme';

interface Props {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Icon name="chevron-right" size={20} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 56,
    marginHorizontal: 24,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    color: Colors.white,
    ...Typography.button,
  },
});
