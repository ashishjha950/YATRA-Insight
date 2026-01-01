import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ActivityItem from './ActivityItem';

const RecentActivitySection = ({ activities }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <FlatList
        data={activities}
        renderItem={({ item }) => <ActivityItem activity={item} />}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});

export default RecentActivitySection;