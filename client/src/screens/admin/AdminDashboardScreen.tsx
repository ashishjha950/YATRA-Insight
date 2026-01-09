// // ============================================================================
// import React, { useState, useEffect } from 'react';
// import { ScrollView, StyleSheet, SafeAreaView, StatusBar, Alert, Text, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useAdminAuth } from '../../hooks/UseAdminAuth';
// import { adminService } from '../../services/admin.service';
// import { colors, spacing } from '../../theme/adminTheme';
// import { LocationSelector } from '../../components/ui/admin/LocationSelector';
// import { AdminHeader } from '../../components/ui/admin/AdminHeader';
// import { StatsSection } from '../../components/ui/admin/StatsSection';
// import { ControlPanel } from '../../components/ui/admin/ControlPanel';
// import { SystemStatus } from '../../components/ui/admin/SystemStatus';
// import { SecurityNotice } from '../../components/ui/admin/SecurityNotice';
// import { LogoutButton } from '../../components/ui/admin/LogoutButton';
// import { DashboardStats } from '../../types/admin.types';

// import * as Updates from 'expo-updates';



// const AdminDashboardScreen = () => {
//   const navigation = useNavigation();
//   const { logout, admin, isAuthenticated } = useAdminAuth();
  
//   const [selectedLocation, setSelectedLocation] = useState('All India');
//   const [stats, setStats] = useState<DashboardStats>({
//     activeTrips: 0,
//     alerts: 0,
//     uptime: 0,
//     systemStatus: 'loading',
//     lastUpdated: '',
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Check authentication on mount
//   useEffect(() => {
//     if (!isAuthenticated) {
//       console.log('❌ Not authenticated, redirecting to login...');
//       // Alert.alert(
//       //   'Authentication Required',
//       //   'Please login as admin to access this screen.',
//       //   // [
//       //   //   {
//       //   //     text: 'OK',
//       //   //     onPress: () => {
//       //   //       navigation.reset({
//       //   //         index: 0,
//       //   //         routes: [{ name: 'Auth' as never }],
//       //   //       });
//       //   //     },
//       //   //   },
//       //   // ]
//       // );
//     }
//   }, [isAuthenticated]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchDashboardData();
//     }
//   }, [selectedLocation, isAuthenticated]);

//   const fetchDashboardData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       console.log('📊 Fetching dashboard data for:', selectedLocation);
      
//       const data = await adminService.getDashboardStats(selectedLocation);
      
//       console.log('✅ Dashboard data received:', data);
//       setStats(data);
      
//     } catch (err: any) {
//       const errorMessage = err || 'Failed to load dashboard data';
//       console.error('❌ Error fetching dashboard data:', errorMessage);
//       setError(errorMessage);
      
//       // Show alert only if it's not a 401 (handled by interceptor)
//       if (!errorMessage.includes('401')) {
//         Alert.alert(
//           'Error Loading Data',
//           errorMessage,
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Retry', onPress: () => fetchDashboardData() }
//           ]
//         );
//       }
      
//       // Set default values on error
//       setStats({
//         activeTrips: 0,
//         alerts: 0,
//         uptime: 0,
//         systemStatus: 'error',
//         lastUpdated: 'Failed to load',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Logout',
//           style: 'destructive',
//           onPress: async () => {
//             await logout();
//             await Updates.reloadAsync(); 
//             // navigation.reset({
//             //   index: 0,
//             //   routes: [{ name: 'Auth' as never }],
//             // });
//           },
//         },
//       ]
//     );
//   };

//   // Show loading or error state
//   if (!isAuthenticated) {
//     // return null
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.centerContainer}>
//           <Text style={styles.errorText}>Authentication Required</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <ScrollView 
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <LocationSelector
//           selectedLocation={selectedLocation}
//           onLocationChange={setSelectedLocation}
//         />

//         <AdminHeader admin={admin} />

//         <StatsSection stats={stats} loading={loading} />

//         <ControlPanel navigation={navigation} />

//         <SystemStatus lastUpdated={stats.lastUpdated} />

//         <SecurityNotice />

//         <LogoutButton onLogout={handleLogout} />

//         {/* Error Display */}
//         {error && (
//           <View style={styles.errorContainer}>
//             <Text style={styles.errorText}>⚠️ {error}</Text>
//           </View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     padding: spacing.md,
//     paddingBottom: spacing.xl,
//   },
//   centerContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: spacing.xl,
//   },
//   errorContainer: {
//     backgroundColor: colors.red + '15',
//     padding: spacing.md,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: colors.red + '30',
//     marginTop: spacing.md,
//   },
//   errorText: {
//     color: colors.red,
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// export default AdminDashboardScreen;




// ============================================================================
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, StatusBar, Alert, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { adminService } from '../../services/admin.service';
import { colors, spacing } from '../../theme/adminTheme';
import { LocationSelector } from '../../components/ui/admin/LocationSelector';
import { AdminHeader } from '../../components/ui/admin/AdminHeader';
import { StatsSection } from '../../components/ui/admin/StatsSection';
import { ControlPanel } from '../../components/ui/admin/ControlPanel';
import { SystemStatus } from '../../components/ui/admin/SystemStatus';
import { SecurityNotice } from '../../components/ui/admin/SecurityNotice';
import { LogoutButton } from '../../components/ui/admin/LogoutButton';
import { DashboardStats } from '../../types/admin.types';
import { useAuth } from '../../context/AuthContext';
import { clearAdminAuth } from '../../utils/adminSecureStorage';
import { clearAuth } from '../../utils/secureStorage';

import * as Updates from 'expo-updates';

const AdminDashboardScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useAuth();
  
  const [selectedLocation, setSelectedLocation] = useState('All India');
  const [stats, setStats] = useState<DashboardStats>({
    activeTrips: 0,
    alerts: 0,
    uptime: 0,
    systemStatus: 'loading',
    lastUpdated: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Check if user is authenticated and is admin
  const isAuthenticated = user && user.role === 'ADMIN';

  useEffect(() => {
    console.log('🔍 AdminDashboard - Current user:', user);
    console.log('🔍 AdminDashboard - Is authenticated:', isAuthenticated);
    
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [selectedLocation, user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('📊 Fetching dashboard data for:', selectedLocation);
      
      const data = await adminService.getDashboardStats(selectedLocation);
      
      console.log('✅ Dashboard data received:', data);
      setStats(data);
      
    } catch (err: any) {
      const errorMessage = err || 'Failed to load dashboard data';
      console.error('❌ Error fetching dashboard data:', errorMessage);
      setError(errorMessage);
      
      // Show alert only if it's not a 401 (handled by interceptor)
      if (!errorMessage.includes('401')) {
        Alert.alert(
          'Error Loading Data',
          errorMessage,
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Retry', onPress: () => fetchDashboardData() }
          ]
        );
      }
      
      // Set default values on error
      setStats({
        activeTrips: 0,
        alerts: 0,
        uptime: 0,
        systemStatus: 'error',
        lastUpdated: 'Failed to load',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              console.log('🚪 Logging out admin...');
              
              // Clear all auth
              await clearAdminAuth();
              await clearAuth();
              
              // Clear context
              setUser(null);
              
              console.log('✅ Logout successful');
              
              // Reload app
              await Updates.reloadAsync();
            } catch (error) {
              console.error('❌ Logout error:', error);
            }
          },
        },
      ]
    );
  };

  // ✅ Show error if not authenticated
  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.errorTitle}>⚠️ Access Denied</Text>
          <Text style={styles.errorText}>
            Admin authentication required
          </Text>
          <Text style={styles.errorSubtext}>
            Current user: {user?.email || 'None'}
          </Text>
          <Text style={styles.errorSubtext}>
            Role: {user?.role || 'None'}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <LocationSelector
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
        />

        <AdminHeader admin={user} />

        <StatsSection stats={stats} loading={loading} />

        <ControlPanel navigation={navigation} />

        <SystemStatus lastUpdated={stats.lastUpdated} />

        <SecurityNotice />

        <LogoutButton onLogout={handleLogout} />

        {/* Error Display */}
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>⚠️ {error}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  errorContainer: {
    backgroundColor: colors.red + '15',
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.red + '30',
    marginTop: spacing.md,
  },
  errorTitle: {
    color: colors.red,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  errorSubtext: {
    color: colors.red + '80',
    fontSize: 14,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});

export default AdminDashboardScreen;