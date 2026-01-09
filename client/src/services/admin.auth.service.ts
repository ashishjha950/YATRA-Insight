import adminApi from './adminApi';

/**
 * Admin login with email and password
 */
export const adminLogin = (email: string, password: string) => {
  return adminApi.post('/admin/login', { email, password });
};

/**
 * Admin logout
 */
export const adminLogout = () => {
  return adminApi.post('/admin/logout');
};

/**
 * Verify admin session
 */
export const verifyAdminSession = () => {
  return adminApi.get('/admin/verify');
};

/**
 * Admin password reset request
 */
export const adminForgotPassword = (email: string) => {
  return adminApi.post('/admin/forgot-password', { email });
};

/**
 * Admin password reset
 */
export const adminResetPassword = (token: string, newPassword: string) => {
  return adminApi.post('/admin/reset-password', { token, newPassword });
};