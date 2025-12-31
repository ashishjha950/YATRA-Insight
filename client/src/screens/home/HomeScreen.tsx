import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { getUser } from '../../utils/secureStorage';

export default function HomeScreen() {

  const [user,setUser] = useState();

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
      <StatusBar style="light" />
      
      {/* Header with Gradient */}
      <LinearGradient
        colors={['#1976D2', '#1565C0']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hi, {user?.name?user.name:"User"} 👋</Text>
            <View style={styles.locationRow}>
              <View style={styles.locationIcon}>
                <View style={styles.locationPinSmall}>
                  <View style={styles.locationPinSmallOuter}>
                    <View style={styles.locationPinSmallInner} />
                  </View>
                  <View style={styles.locationPinSmallBottom} />
                </View>
              </View>
              <Text style={styles.location}>San Francisco, CA</Text>
            </View>
          </View>

          <View style={styles.weatherCard}>
            <View style={styles.cloudIcon}>
              <View style={styles.cloudShape} />
            </View>
            <Text style={styles.weatherText}>Partly Cloudy</Text>
            <View style={styles.temperatureIcon}>
              <View style={styles.thermometer} />
            </View>
            <Text style={styles.temperature}>72°F</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <View style={styles.searchCircle} />
            <View style={styles.searchHandle} />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search destinations, trips, places"
            placeholderTextColor="#999"
          />
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        {/* Map Preview Card */}
        <View style={styles.mapCard}>
          <View style={styles.mapPlaceholder}>
            <View style={styles.activeIndicator} />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIconContainer, { backgroundColor: '#E3F2FD' }]}>
                <View style={styles.navigationIcon}>
                  <View style={styles.navigationArrow} />
                </View>
              </View>
              <Text style={styles.actionLabel}>Start{'\n'}Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIconContainer, { backgroundColor: '#FFF3E0' }]}>
                <View style={styles.dollarIcon}>
                  <Text style={styles.dollarSign}>$</Text>
                </View>
              </View>
              <Text style={styles.actionLabel}>Expenses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIconContainer, { backgroundColor: '#FFEBEE' }]}>
                <View style={styles.safetyShieldIcon}>
                  <View style={styles.safetyShieldTop} />
                  <View style={styles.safetyShieldBottom} />
                </View>
              </View>
              <Text style={styles.actionLabel}>Safety</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIconContainer, { backgroundColor: '#E0F7FA' }]}>
                <View style={styles.cameraIconSmall}>
                  <View style={styles.cameraBodySmall} />
                  <View style={styles.cameraLensSmall} />
                </View>
              </View>
              <Text style={styles.actionLabel}>Diary</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationIcon: {
    width: 16,
    height: 16,
  },
  locationPinSmall: {
    alignItems: 'center',
  },
  locationPinSmallOuter: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -2,
  },
  locationPinSmallInner: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#1976D2',
  },
  locationPinSmallBottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  weatherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  cloudIcon: {
    width: 20,
    height: 16,
  },
  cloudShape: {
    width: 20,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  weatherText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  temperatureIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  thermometer: {
    width: 4,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginTop: 2,
  },
  temperature: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  searchCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#999',
  },
  searchHandle: {
    width: 6,
    height: 2,
    backgroundColor: '#999',
    position: 'absolute',
    right: 0,
    bottom: 0,
    transform: [{ rotate: '45deg' }],
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  content: {
    flex: 1,
  },
  mapCard: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  mapPlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  actionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationIcon: {
    width: 24,
    height: 24,
  },
  navigationArrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#2196F3',
    transform: [{ rotate: '45deg' }],
  },
  dollarIcon: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarSign: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA726',
  },
  safetyShieldIcon: {
    width: 24,
    height: 28,
    alignItems: 'center',
  },
  safetyShieldTop: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#F44336',
  },
  safetyShieldBottom: {
    width: 24,
    height: 16,
    backgroundColor: '#F44336',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cameraIconSmall: {
    width: 28,
    height: 24,
    position: 'relative',
  },
  cameraBodySmall: {
    width: 28,
    height: 20,
    backgroundColor: '#26C6DA',
    borderRadius: 4,
    marginTop: 4,
  },
  cameraLensSmall: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    top: 8,
    left: 8,
  },
  actionLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 16,
  },
});