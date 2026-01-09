import * as SecureStore from 'expo-secure-store';

const ADMIN_TOKEN_KEY = 'admin_token';
const ADMIN_USER_KEY = 'admin_user';

export const saveAdminAuth = async (token: string, admin: any) => {
  await SecureStore.setItemAsync(ADMIN_TOKEN_KEY, token);
  await SecureStore.setItemAsync(ADMIN_USER_KEY, JSON.stringify(admin));
};

export const getAdminToken = async () => {
  return await SecureStore.getItemAsync(ADMIN_TOKEN_KEY);
};

export const getAdminUser = async () => {
  const admin = await SecureStore.getItemAsync(ADMIN_USER_KEY);
  return admin ? JSON.parse(admin) : null;
};

export const clearAdminAuth = async () => {
  await SecureStore.deleteItemAsync(ADMIN_TOKEN_KEY);
  await SecureStore.deleteItemAsync(ADMIN_USER_KEY);
};

export const updateAdminUser = async (updatedAdmin: any) => {
  await SecureStore.setItemAsync(
    ADMIN_USER_KEY,
    JSON.stringify(updatedAdmin)
  );
};