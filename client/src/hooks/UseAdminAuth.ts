// import { useState, useEffect } from 'react';
// import { 
//   getAdminToken, 
//   getAdminUser, 
//   saveAdminAuth, 
//   clearAdminAuth 
// } from '../utils/adminSecureStorage';
// import { adminService } from '../services/admin.service';
// import { clearAuth } from '../utils/secureStorage';
// // import { authEventEmitter } from '../utils/authEvents';

// interface Admin {
//   id: string;
//   email: string;
//   role: string;
//   name?: string;
// }

// interface UseAdminAuthReturn {
//   admin: Admin | null;
//   token: string | null;
//   loading: boolean;
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
//   logout: () => Promise<void>;
// }

// export const useAdminAuth = (): UseAdminAuthReturn => {
//   const [admin, setAdmin] = useState<Admin | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     try {
//       console.log('🔍 Checking admin authentication...');
//       const storedToken = await getAdminToken();
//       const storedAdmin = await getAdminUser();
      
//       console.log('Auth Status:', { 
//         hasToken: !!storedToken, 
//         hasAdmin: !!storedAdmin 
//       });

//       if (storedToken && storedAdmin) {
//         setToken(storedToken);
//         setAdmin(storedAdmin);
//         console.log('✅ Admin authenticated:', storedAdmin.email);
//       } else {
//         console.log('❌ No admin session found');
//       }
//     } catch (error) {
//       console.error('❌ Auth check failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email: string, password: string) => {
//     try {
//       console.log('🔐 Attempting admin login:', { email });
      
//       // Call backend API
//       const response = await adminService.login(email, password);
      
//       console.log('✅ Login successful:', response);
      
//       // Save to SecureStore
//       await saveAdminAuth(response.token, response.admin);
      
//       // Update state
//       setToken(response.token);
//       setAdmin(response.admin);
      
//       console.log('✅ Admin session saved');
      
//       return { success: true };
//     } catch (error: any) {
//       console.error('❌ Login failed:', error);
//       return { 
//         success: false, 
//         error: error || 'Login failed. Please check your credentials.' 
//       };
//     }
//   };

//   const logout = async () => {
//     try {
//       console.log('🚪 Logging out admin...');
      
//       // Clear SecureStore
//       await clearAdminAuth();
//       await clearAuth();  
      
//       // Clear state
//       setToken(null);
//       setAdmin(null);

//       // authEventEmitter.emit('AUTH_CHANGED');
      
//       console.log('✅ Admin logged out successfully');
//     } catch (error) {
//       console.error('❌ Logout error:', error);
//     }
//   };

//   return {
//     admin,
//     token,
//     loading,
//     isAuthenticated: !!admin && !!token,
//     login,
//     logout,
//   };
// };




import { useState, useEffect } from 'react';
import { 
  getAdminToken, 
  getAdminUser, 
  saveAdminAuth, 
  clearAdminAuth 
} from '../utils/adminSecureStorage';
import { adminService } from '../services/admin.service';
import { clearAuth, saveAuth } from '../utils/secureStorage';
import { useAuth } from '../context/AuthContext';

interface Admin {
  id: string;
  email: string;
  role: string;
  name?: string;
}

interface UseAdminAuthReturn {
  admin: Admin | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

export const useAdminAuth = (): UseAdminAuthReturn => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const { setUser } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      console.log('🔍 [UseAdminAuth] Checking admin authentication...');
      const storedToken = await getAdminToken();
      const storedAdmin = await getAdminUser();
      
      console.log('🔍 [UseAdminAuth] Auth Status:', { 
        hasToken: !!storedToken, 
        hasAdmin: !!storedAdmin,
        adminData: storedAdmin
      });

      if (storedToken && storedAdmin) {
        setToken(storedToken);
        setAdmin(storedAdmin);
        setUser(storedAdmin); // ✅ Update context
        console.log('✅ [UseAdminAuth] Admin authenticated:', storedAdmin.email);
      } else {
        console.log('❌ [UseAdminAuth] No admin session found');
        setToken(null);
        setAdmin(null);
      }
    } catch (error) {
      console.error('❌ [UseAdminAuth] Auth check failed:', error);
      setToken(null);
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      console.log('🔐 [UseAdminAuth] Attempting admin login:', { email });
      
      // Call backend API (this now saves to both storages)
      const response = await adminService.login(email, password);
      
      console.log('✅ [UseAdminAuth] Login successful:', response);
      
      // Update state
      setToken(response.token);
      setAdmin(response.admin);
      setUser(response.admin); // ✅ Update context immediately
      
      console.log('✅ [UseAdminAuth] Admin session saved and context updated');
      
      return { success: true };
    } catch (error: any) {
      console.error('❌ [UseAdminAuth] Login failed:', error);
      return { 
        success: false, 
        error: error || 'Login failed. Please check your credentials.' 
      };
    }
  };

  const logout = async () => {
    try {
      console.log('🚪 [UseAdminAuth] Logging out admin...');
      
      // Clear SecureStore
      await clearAdminAuth();
      await clearAuth();  
      
      // Clear state
      setToken(null);
      setAdmin(null);
      setUser(null); // ✅ Clear context
      
      console.log('✅ [UseAdminAuth] Admin logged out successfully');
    } catch (error) {
      console.error('❌ [UseAdminAuth] Logout error:', error);
    }
  };

  return {
    admin,
    token,
    loading,
    isAuthenticated: !!admin && !!token,
    login,
    logout,
  };
};