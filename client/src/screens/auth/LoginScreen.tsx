// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// export default function LoginScreen({ navigation }: any) {
//   const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('phone');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSendOTP = () => {
//     // Handle OTP sending logic
//     console.log('Send OTP clicked');
//     // navigation.navigate('OTPVerification');
//   };

//   const handleSkip = () => {
//     // Handle skip logic
//     console.log('Skip for now');
//     // navigation.navigate('Main');
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <StatusBar style="dark" />
//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.header}>
//           <Text style={styles.title}>Welcome Back</Text>
//           <Text style={styles.subtitle}>Sign in to continue your journey</Text>
//         </View>

//         <View style={styles.authMethodContainer}>
//           <TouchableOpacity
//             style={[
//               styles.authMethodButton,
//               authMethod === 'phone' && styles.authMethodButtonActive,
//             ]}
//             onPress={() => setAuthMethod('phone')}
//           >
//             <View style={styles.phoneIcon}>
//               <View style={styles.phoneIconInner}>
//                 <View style={styles.phoneReceiver} />
//               </View>
//             </View>
//             <Text
//               style={[
//                 styles.authMethodText,
//                 authMethod === 'phone' && styles.authMethodTextActive,
//               ]}
//             >
//               Phone
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[
//               styles.authMethodButton,
//               authMethod === 'email' && styles.authMethodButtonActive,
//             ]}
//             onPress={() => setAuthMethod('email')}
//           >
//             <View style={styles.emailIcon}>
//               <View style={styles.emailEnvelope}>
//                 <View style={styles.emailFlap} />
//               </View>
//             </View>
//             <Text
//               style={[
//                 styles.authMethodText,
//                 authMethod === 'email' && styles.authMethodTextActive,
//               ]}
//             >
//               Email
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.formContainer}>
//           {authMethod === 'phone' ? (
//             <View style={styles.inputGroup}>
//               <Text style={styles.label}>Phone Number</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="+1 (555) 000-0000"
//                 placeholderTextColor="#999"
//                 value={phoneNumber}
//                 onChangeText={setPhoneNumber}
//                 keyboardType="phone-pad"
//               />
//             </View>
//           ) : (
//             <View style={styles.inputGroup}>
//               <Text style={styles.label}>Email Address</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="your.email@example.com"
//                 placeholderTextColor="#999"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>
//           )}
//         </View>

//         <View style={styles.bottomContainer}>
//           <TouchableOpacity style={styles.sendButton} onPress={handleSendOTP}>
//             <Text style={styles.sendButtonText}>Send OTP</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//             <Text style={styles.skipButtonText}>
//               Skip for now (limited access)
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingTop: 60,
//     paddingBottom: 40,
//   },
//   header: {
//     marginBottom: 32,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#999',
//   },
//   authMethodContainer: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 32,
//   },
//   authMethodButton: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     borderWidth: 1.5,
//     borderColor: '#e0e0e0',
//     gap: 8,
//   },
//   authMethodButtonActive: {
//     backgroundColor: '#2196F3',
//     borderColor: '#2196F3',
//   },
//   authMethodText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//   },
//   authMethodTextActive: {
//     color: '#fff',
//   },
//   phoneIcon: {
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   phoneIconInner: {
//     width: 14,
//     height: 14,
//     borderWidth: 2,
//     borderColor: '#666',
//     borderRadius: 3,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   phoneReceiver: {
//     width: 8,
//     height: 2,
//     backgroundColor: '#666',
//     borderRadius: 1,
//   },
//   emailIcon: {
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emailEnvelope: {
//     width: 16,
//     height: 12,
//     borderWidth: 2,
//     borderColor: '#666',
//     borderRadius: 2,
//     position: 'relative',
//   },
//   emailFlap: {
//     position: 'absolute',
//     top: -2,
//     left: -2,
//     right: -2,
//     width: 16,
//     height: 8,
//     borderLeftWidth: 8,
//     borderRightWidth: 8,
//     borderTopWidth: 6,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderTopColor: '#666',
//   },
//   formContainer: {
//     flex: 1,
//     marginBottom: 24,
//   },
//   inputGroup: {
//     marginBottom: 24,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1a1a1a',
//     marginBottom: 8,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderWidth: 1.5,
//     borderColor: '#e0e0e0',
//     borderRadius: 12,
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: '#1a1a1a',
//   },
//   bottomContainer: {
//     gap: 16,
//   },
//   sendButton: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#2196F3',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   skipButton: {
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   skipButtonText: {
//     color: '#999',
//     fontSize: 15,
//   },
// });



import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAuthOtp } from '../../hooks/useAuthOtp'
import { saveAuth } from '../../utils/secureStorage';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const {
  loading,
  otpSent,
  requestOtp,
  confirmOtp,
} = useAuthOtp()

  const { setUser } = useAuth()

  const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}


const handleSendOTP = async () => {
  if (!otpSent) {
    if (!email || !isValidEmail(email)) {
      alert('Enter valid email')
      return
    }
    
    await requestOtp(email)
  } else {
    if (!otp) {
      alert('Please enter the OTP')
      return
    }
    else if (otp.length !== 6) {
      alert('Invalid OTP')
      return
    }

    const res = await confirmOtp(email, otp)
    await saveAuth(res.token, res.user)
    setUser(res.user)
    navigation.navigate('EmergencyContact')
  }
}

  const handleResendOTP = async () => {
  setOtp('')
  await requestOtp(email)
}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Sign in using your email to continue
          </Text>
        </View>

        {/* Email Input */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="your.email@example.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!otpSent}
            />
          </View>

          {/* OTP Input */}
          {otpSent && (
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Enter OTP</Text>
              <TextInput
                style={[styles.input, styles.otpInput]}
                placeholder="Enter OTP"
                placeholderTextColor="#999"
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
                maxLength={6}
              />

              <TouchableOpacity
                style={styles.resendButton}
                onPress={handleResendOTP}
              >
                <Text style={styles.resendText}>Resend OTP</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.sendButton} onPress={handleSendOTP}>
          <Text style={styles.sendButtonText}>
  {loading
    ? 'Please wait...'
    : otpSent
    ? 'Verify & Continue'
    : 'Send OTP'}
</Text>

        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
  },
  authMethodContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  authMethodButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    gap: 8,
  },
  authMethodButtonActive: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  authMethodText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  authMethodTextActive: {
    color: '#fff',
  },
  phoneIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIconInner: {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneReceiver: {
    width: 8,
    height: 2,
    backgroundColor: '#666',
    borderRadius: 1,
  },
  emailIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailEnvelope: {
    width: 16,
    height: 12,
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 2,
    position: 'relative',
  },
  emailFlap: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    width: 16,
    height: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#666',
  },
  formContainer: {
    flex: 1,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1a1a1a',
  },
  otpInput: {
    borderColor: '#2196F3',
    borderWidth: 2,
  },
  resendButton: {
    marginTop: 12,
  },
  resendText: {
    color: '#2196F3',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomContainer: {
    gap: 16,
  },
  sendButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  skipButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#999',
    fontSize: 15,
  },
});