
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../screens/auth/LoginScreen";
// import EmergencyContactScreen from "../screens/auth/EmergencyContactScreen";
// import PermissionsScreen from "../screens/permissions/PermissionsScreen";

// const Stack = createNativeStackNavigator();

// export default function AuthNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="EmergencyContact" component={EmergencyContactScreen} />
//       <Stack.Screen name="Permissions" component={PermissionsScreen} />
//     </Stack.Navigator>
//   );
// }




import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import EmergencyContactScreen from "../screens/auth/EmergencyContactScreen";
import PermissionsScreen from "../screens/permissions/PermissionsScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator({ onAuthSuccess }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => (
          <LoginScreen {...props} onSuccess={onAuthSuccess} />
        )}
      </Stack.Screen>

      <Stack.Screen name="EmergencyContact" component={EmergencyContactScreen} />

      <Stack.Screen name="Permissions">
        {(props) => (
          <PermissionsScreen {...props} onComplete={onAuthSuccess} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
