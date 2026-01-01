import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import RecordButton from '../../components/ui/diary/RecordButton';
import { useNavigation } from '@react-navigation/native';

const trips = [
  {
    id: '1',
    title: 'Trip to Lake Tahoe',
    location: 'Lake Tahoe, CA',
    date: 'Dec 15, 2024',
    distance: '245 miles',
    duration: '4h 30m',
    expense: '$247',
    status: 'Completed',
  },
  {
    id: '2',
    title: 'Weekend in Napa Valley',
    location: 'Napa Valley, CA',
    date: 'Dec 8, 2024',
    distance: '178 miles',
    duration: '3h 15m',
    expense: '$189',
    status: 'Completed',
  },
  {
    id: '3',
    title: 'Business Trip to San Jose',
    location: 'San Jose, CA',
    date: 'Nov 28, 2024',
    distance: '98 miles',
    duration: '2h 10m',
    expense: '$96',
    status: 'Completed',
  },
  {
    id: '4',
    title: 'Road Trip to Big Sur',
    location: 'Big Sur, CA',
    date: 'Nov 18, 2024',
    distance: '312 miles',
    duration: '6h 45m',
    expense: '$312',
    status: 'Completed',
  },
  {
    id: '5',
    title: 'Family Visit – Sacramento',
    location: 'Sacramento, CA',
    date: 'Nov 05, 2024',
    distance: '121 miles',
    duration: '2h 40m',
    expense: '$112',
    status: 'Completed',
  },
];


export default function TripScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
              </TouchableOpacity>
        <Text style={styles.headerTitle}>My Trips</Text>
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search trips..."
            placeholderTextColor="#9E9E9E"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <StatCard label="Total Trips" value="4" />
        <StatCard label="Distance" value="897 mi" />
        <StatCard label="Expenses" value="$956" />
      </View>

      {/* Trip List */}
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => <TripCard trip={item} />}
      />

      <RecordButton />
    </View>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({ label, value }: any) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function TripCard({ trip }: any) {
  return (
    <View style={styles.tripCard}>
      <View style={styles.tripTopRow}>
        <Text style={styles.tripTitle}>{trip.title}</Text>
        <Text style={styles.tripExpense}>{trip.expense}</Text>
      </View>

      <Text style={styles.tripLocation}>📍 {trip.location}</Text>
      <Text style={styles.tripDate}>📅 {trip.date}</Text>

      <View style={styles.tripBottomRow}>
        <Text style={styles.tripMeta}>
          {trip.distance} • {trip.duration}
        </Text>

        <View style={styles.statusBadge}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>{trip.status}</Text>
        </View>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FA',
    paddingHorizontal: 16,
  },

  header: {
    paddingTop: 60,
    paddingBottom: 16,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },

  searchRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 16,
    color: '#1A1A1A',
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 18,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  statLabel: {
    fontSize: 13,
    color: '#9E9E9E',
    marginTop: 4,
  },

  tripCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },
  tripTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  tripExpense: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  tripLocation: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  tripDate: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
  },
  tripBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripMeta: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F8F3',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusDot: {
    width: 8,
    height: 8,
    backgroundColor: '#1ABC9C',
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#1ABC9C',
    fontWeight: '600',
  },
});
