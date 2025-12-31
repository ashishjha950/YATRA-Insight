import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SettingItems from './SettingItems';
import { clearAuth, getUser } from '../../utils/secureStorage';


export default function ProfileScreen() {

  const [user,setUser] = useState();

  const logoutUser = async () => {
    await clearAuth()
  }

  const fetchData=async () => {
      const user = await getUser();
      setUser(user)
      console.log(user)
    }
  
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile & Settings</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>I</Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user?.name?user.name:"User"}</Text>
            <Text style={styles.email}>{user?.email?user.email:"user"}</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatCard label="Trips" value="24" />
          <StatCard label="Miles" value="3,420" />
          <StatCard label="Spent" value="$2.4k" />
        </View>

        {/* Account Section */}
        <Text style={styles.sectionTitle}>Account</Text>

        <View style={styles.sectionCard}>
          <SettingItem title="Profile Information" />
          <Divider />
          <SettingItem title="Emergency Contacts" badge="2" />
        </View>

        {/* Privacy Section */}
        <Text style={styles.sectionTitle}>Privacy & Data</Text>

       
<View style={styles.sectionCard}>
  <SettingItems title="Privacy & Consent" />
  <Divider />

  <SettingItems title="Location Data Usage" />
  <Divider />

  <SettingItems title="Download My Data" />
  <Divider />

  <SettingItems title="Terms & Policies" />
  <Divider />

  <SettingItems title="Delete Account" danger />
  <SettingItems title="Logout" danger onPress={logoutUser} />
</View>

        <View style={{ height: 40 }} />
      </ScrollView>
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

function SettingItem({ title, badge }: any) {
  return (
    <TouchableOpacity style={styles.settingRow}>
      <View style={styles.settingLeft}>
        <View style={styles.iconPlaceholder} />
        <Text style={styles.settingText}>{title}</Text>
      </View>

      <View style={styles.settingRight}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

function Divider() {
  return <View style={styles.divider} />;
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
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  email: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  phone: {
    fontSize: 13,
    color: '#6B7280',
  },
  editText: {
    color: '#2196F3',
    fontSize: 14,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  statLabel: {
    fontSize: 13,
    color: '#9E9E9E',
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },

  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
  },

  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8F2FF',
  },
  settingText: {
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  arrow: {
    fontSize: 18,
    color: '#9E9E9E',
  },

  badge: {
    backgroundColor: '#E8F2FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    color: '#2196F3',
    fontSize: 12,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
  },
});
