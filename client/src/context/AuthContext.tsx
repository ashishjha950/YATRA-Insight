// import React, { createContext, useContext, useState } from 'react'
// import { updateUserKey } from '../utils/secureStorage'

// const AuthContext = createContext<any>(null)

// export const AuthProvider = ({ children }: any) => {
//   const [user, setUser] = useState<any>(null)

//   const updateUser = async (updatedUser: any) => {
//     setUser(updatedUser)
//     await updateUserKey(updatedUser)
//   }
  

//   return (
//     <AuthContext.Provider value={{ user, setUser, updateUser }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)



import React, { createContext, useContext, useState } from 'react';
import { updateUserKey } from '../utils/secureStorage';

interface User {
  id: string;
  email: string;
  role: string;
  name?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (updatedUser: User) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = async (updatedUser: User) => {
    console.log('🔄 Updating user in context:', updatedUser);
    setUser(updatedUser);
    await updateUserKey(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};