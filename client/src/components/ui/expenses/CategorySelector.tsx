import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';
import { expenseCategories } from '../../../constants/expenseCategories';

export default function CategorySelector() {
  const [selected, setSelected] = useState('transport');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>

      <View style={styles.row}>
        {expenseCategories.map((item) => (
          <CategoryItem
            key={item.id}
            item={item}
            selected={selected === item.id}
            onPress={() => setSelected(item.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
});
