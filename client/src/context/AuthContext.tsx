import React, { createContext, useContext, useState } from 'react'
import { updateUserKey } from '../utils/secureStorage'

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null)

  const updateUser = async (updatedUser: any) => {
    setUser(updatedUser)
    await updateUserKey(updatedUser)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
