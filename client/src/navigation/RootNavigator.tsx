// // ============================================================================
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useEffect, useState } from "react";
// import SplashScreen from "../screens/SplashScreen";
// import OnboardingScreen from "../screens/onBoarding/OnboardingScreen";
// import AuthNavigator from "./AuthNavigator";
// import MainNavigator from "./TabNavigator";
// // USER SCREENS
// import ExpensesScreen from "../screens/expenses/ExpensesScreen";
// import StartTripScreen from "../screens/trip/StartTripScreen";
// import TripScreen from "../screens/trip/TripScreen";
// import AddEmergencyContact from "../components/ui/safety/AddEmergencyContact";
// import AddTrustedContact from "../components/ui/safety/AddTrustedContact";
// // ADMIN SCREEN
// import AdminDashboardScreen from "../screens/admin/AdminDashboardScreen";
// import { getToken, getUser } from "../utils/secureStorage";
// import { getAdminToken, getAdminUser } from "../utils/adminSecureStorage";
// import { useAuth } from "../context/AuthContext";

// const Stack = createNativeStackNavigator();

// export default function RootNavigator() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const { user, setUser } = useAuth();

//   // ✅ Re-check authentication function
//   const checkAuthentication = async () => {
//     try {
//       console.log('🔍 Checking authentication...');
      
//       // Check for admin auth first
//       const adminToken = await getAdminToken();
//       const adminData = await getAdminUser();
      
//       if (adminToken && adminData) {
//         console.log('✅ Admin session found:', adminData.email);
//         setIsAdmin(true);
//         setIsAuthenticated(true);
//         setUser(adminData);
//         return;
//       }

//       // Check for regular user auth
//       const userToken = await getToken();
//       const userData = await getUser();
      
//       if (userToken && userData) {
//         console.log('✅ User session found:', userData);
        
//         // ✅ Check if user has ADMIN role
//         const userIsAdmin = userData.role === "ADMIN";
        
//         setIsAuthenticated(true);
//         setUser(userData);
//         setIsAdmin(userIsAdmin);
        
//         console.log('👤 User role:', userData.role, 'Is Admin:', userIsAdmin);
//       } else {
//         console.log('❌ No active session');
//         setIsAuthenticated(false);
//         setIsAdmin(false);
//         setUser(null);
//       }
//     } catch (error) {
//       console.error('❌ Bootstrap auth error:', error);
//       setIsAuthenticated(false);
//       setIsAdmin(false);
//       setUser(null);
//     }
//   };

//   useEffect(() => {
//     const bootstrapAuth = async () => {
//       await checkAuthentication();
//       setIsLoading(false);
//     };

//     bootstrapAuth();
//   }, []);

//   // ✅ Handle successful authentication
//   const handleAuthSuccess = async () => {
//     console.log('🔄 Auth success - rechecking authentication...');
//     await checkAuthentication();
//     setIsAuthenticated(true);
//   };

//   if (isLoading) {
//     return <SplashScreen />;
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!isAuthenticated ? (
//         <>
//           {/* ONBOARDING */}
//           <Stack.Screen name="Onboarding">
//             {(props) => (
//               <OnboardingScreen {...props} onFinish={() => {}} />
//             )}
//           </Stack.Screen>
//           {/* AUTH */}
//           <Stack.Screen name="Auth">
//             {(props) => (
//               <AuthNavigator
//                 {...props}
//                 onAuthSuccess={handleAuthSuccess}
//               />
//             )}
//           </Stack.Screen>
//         </>
//       ) : isAdmin ? (
//         <>
//           {/* 🔐 ADMIN FLOW */}
//           <Stack.Screen
//             name="Admin"
//             component={AdminDashboardScreen}
//             options={{ animation: "fade" }}
//           />
//         </>
//       ) : (
//         <>
//           {/* 👤 USER FLOW */}
//           <Stack.Screen name="Main" component={MainNavigator} />
//           <Stack.Screen
//             name="Expenses"
//             component={ExpensesScreen}
//             options={{ animation: "slide_from_right" }}
//           />
//           <Stack.Screen
//             name="startTrip"
//             component={StartTripScreen}
//             options={{ animation: "slide_from_right" }}
//           />
//           <Stack.Screen
//             name="Trip"
//             component={TripScreen}
//             options={{ animation: "slide_from_right" }}
//           />
//           <Stack.Screen
//             name="AddEmergencyContact"
//             component={AddEmergencyContact}
//             options={{ animation: "slide_from_right" }}
//           />
//           <Stack.Screen
//             name="AddTrustedContact"
//             component={AddTrustedContact}
//             options={{ animation: "slide_from_right" }}
//           />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// }


// ============================================================================
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState, useCallback } from "react";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/onBoarding/OnboardingScreen";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./TabNavigator";
// USER SCREENS
import ExpensesScreen from "../screens/expenses/ExpensesScreen";
import StartTripScreen from "../screens/trip/StartTripScreen";
import TripScreen from "../screens/trip/TripScreen";
import AddEmergencyContact from "../components/ui/safety/AddEmergencyContact";
import AddTrustedContact from "../components/ui/safety/AddTrustedContact";
// ADMIN SCREEN
import AdminDashboardScreen from "../screens/admin/AdminDashboardScreen";
import { getToken, getUser } from "../utils/secureStorage";
import { getAdminToken, getAdminUser } from "../utils/adminSecureStorage";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, setUser } = useAuth();

  // ✅ Memoized function to check authentication
  const checkAuthentication = useCallback(async () => {
    try {
      console.log('🔍 [RootNavigator] Checking authentication...');
      
      // Priority 1: Check for admin auth first
      const adminToken = await getAdminToken();
      const adminData = await getAdminUser();
      
      console.log('🔍 [RootNavigator] Admin check:', { 
        hasAdminToken: !!adminToken, 
        hasAdminData: !!adminData,
        adminEmail: adminData?.email,
        adminRole: adminData?.role
      });
      
      if (adminToken && adminData) {
        console.log('✅ [RootNavigator] Admin session found:', adminData.email);
        setIsAdmin(true);
        setIsAuthenticated(true);
        setUser(adminData);
        return { isAuth: true, isAdminUser: true };
      }

      // Priority 2: Check for regular user auth
      const userToken = await getToken();
      const userData = await getUser();
      
      console.log('🔍 [RootNavigator] User check:', { 
        hasUserToken: !!userToken, 
        hasUserData: !!userData,
        userEmail: userData?.email,
        userRole: userData?.role
      });
      
      if (userToken && userData) {
        // ✅ Check if user has ADMIN role
        const userIsAdmin = userData.role === "ADMIN";
        
        console.log('✅ [RootNavigator] User session found:', {
          email: userData.email,
          role: userData.role,
          isAdmin: userIsAdmin
        });
        
        setIsAuthenticated(true);
        setUser(userData);
        setIsAdmin(userIsAdmin);
        
        return { isAuth: true, isAdminUser: userIsAdmin };
      }
      
      // No authentication found
      console.log('❌ [RootNavigator] No active session');
      setIsAuthenticated(false);
      setIsAdmin(false);
      setUser(null);
      
      return { isAuth: false, isAdminUser: false };
      
    } catch (error) {
      console.error('❌ [RootNavigator] Auth check error:', error);
      setIsAuthenticated(false);
      setIsAdmin(false);
      setUser(null);
      return { isAuth: false, isAdminUser: false };
    }
  }, [setUser]);

  // ✅ Initial authentication check
  useEffect(() => {
    const bootstrapAuth = async () => {
      console.log('🚀 [RootNavigator] Bootstrapping authentication...');
      await checkAuthentication();
      setIsLoading(false);
      console.log('✅ [RootNavigator] Bootstrap complete');
    };

    bootstrapAuth();
  }, [checkAuthentication]);

  // ✅ Re-check when user context changes
  useEffect(() => {
    if (user) {
      console.log('🔄 [RootNavigator] User context changed:', {
        email: user.email,
        role: user.role
      });
      
      const userIsAdmin = user.role === "ADMIN";
      setIsAdmin(userIsAdmin);
      setIsAuthenticated(true);
    }
  }, [user]);

  // ✅ Handle successful authentication
  const handleAuthSuccess = useCallback(async () => {
    console.log('🔄 [RootNavigator] Auth success callback - rechecking...');
    
    const result = await checkAuthentication();
    
    console.log('✅ [RootNavigator] Auth recheck result:', result);
    
    setIsAuthenticated(true);
  }, [checkAuthentication]);

  // Show splash screen while loading
  if (isLoading) {
    return <SplashScreen />;
  }

  console.log('🎯 [RootNavigator] Current state:', {
    isAuthenticated,
    isAdmin,
    userEmail: user?.email,
    userRole: user?.role
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <>
          {/* ONBOARDING */}
          <Stack.Screen name="Onboarding">
            {(props) => (
              <OnboardingScreen {...props} onFinish={() => {}} />
            )}
          </Stack.Screen>
          {/* AUTH */}
          <Stack.Screen name="Auth">
            {(props) => (
              <AuthNavigator
                {...props}
                onAuthSuccess={handleAuthSuccess}
              />
            )}
          </Stack.Screen>
        </>
      ) : isAdmin ? (
        <>
          {/* 🔐 ADMIN FLOW */}
          <Stack.Screen
            name="Admin"
            component={AdminDashboardScreen}
            options={{ animation: "fade" }}
          />
        </>
      ) : (
        <>
          {/* 👤 USER FLOW */}
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen
            name="Expenses"
            component={ExpensesScreen}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="startTrip"
            component={StartTripScreen}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Trip"
            component={TripScreen}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="AddEmergencyContact"
            component={AddEmergencyContact}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="AddTrustedContact"
            component={AddTrustedContact}
            options={{ animation: "slide_from_right" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}