
// import adminApi from './adminApi';

// export interface DashboardStats {
//   activeTrips: number;
//   alerts: number;
//   uptime: number;
//   systemStatus: string;
//   lastUpdated: string;
// }

// export interface AdminLoginResponse {
//   token: string;
//   admin: {
//     id: string;
//     email: string;
//     role: string;
//     name?: string;
//   };
// }

// export interface HeatmapData {
//   location: string;
//   density: number;
//   coordinates: {
//     lat: number;
//     lng: number;
//   };
// }

// export interface Incident {
//   id: string;
//   type: string;
//   location: string;
//   severity: 'low' | 'medium' | 'high';
//   timestamp: string;
//   description: string;
// }

// export interface ReportData {
//   id: string;
//   type: string;
//   location: string;
//   generatedAt: string;
//   downloadUrl: string;
// }

// class AdminService {
//   /**
//    * Admin login - Backend call
//    */
//   async login(email: string, password: string): Promise<AdminLoginResponse> {
//     try {
//       console.log('🔑 Admin Login Request:', { email });
//       const response = await adminApi.post('/admin/login', { email, password });
//       console.log('✅ Admin Login Success:', response);
//       return response;
//     } catch (error) {
//       console.error('❌ Admin Login Failed:', error);
//       throw error;
//     }
//   }

//   /**
//    * Get dashboard statistics - Backend call
//    */
//   async getDashboardStats(location: string): Promise<DashboardStats> {
//     try {
//       console.log('📊 Fetching Dashboard Stats:', { location });
//       const response = await adminApi.get('/admin/dashboard/stats', {
//         params: { location },
//       });
//       console.log('✅ Dashboard Stats Received:', response);
//       return response;
//     } catch (error) {
//       console.error('❌ Dashboard Stats Error:', error);
//       throw error;
//     }
//   }

//   /**
//    * Get heatmap data - Backend call
//    */
//   async getHeatmapData(location: string): Promise<HeatmapData[]> {
//     try {
//       console.log('🗺️ Fetching Heatmap Data:', { location });
//       const response = await adminApi.get('/admin/heatmap', {
//         params: { location },
//       });
//       console.log('✅ Heatmap Data Received');
//       return response;
//     } catch (error) {
//       console.error('❌ Heatmap Data Error:', error);
//       throw error;
//     }
//   }

//   /**
//    * Get incidents - Backend call
//    */
//   async getIncidents(location: string): Promise<Incident[]> {
//     try {
//       console.log('⚠️ Fetching Incidents:', { location });
//       const response = await adminApi.get('/admin/incidents', {
//         params: { location },
//       });
//       console.log('✅ Incidents Received');
//       return response;
//     } catch (error) {
//       console.error('❌ Incidents Error:', error);
//       throw error;
//     }
//   }

//   /**
//    * Generate report - Backend call
//    */
//   async generateReport(type: string, location: string): Promise<ReportData> {
//     try {
//       console.log('📄 Generating Report:', { type, location });
//       const response = await adminApi.post('/admin/reports/generate', {
//         type,
//         location,
//       });
//       console.log('✅ Report Generated');
//       return response;
//     } catch (error) {
//       console.error('❌ Generate Report Error:', error);
//       throw error;
//     }
//   }

//   /**
//    * Get analytics - Backend call
//    */
//   async getAnalytics(location: string, dateRange?: { start: string; end: string }) {
//     try {
//       console.log('📈 Fetching Analytics:', { location, dateRange });
//       const response = await adminApi.get('/admin/analytics', {
//         params: { location, ...dateRange },
//       });
//       console.log('✅ Analytics Received');
//       return response;
//     } catch (error) {
//       console.error('❌ Analytics Error:', error);
//       throw error;
//     }
//   }

//   /**
//    * Update incident status - Backend call
//    */
//   async updateIncidentStatus(incidentId: string, status: string) {
//     try {
//       console.log('🔄 Updating Incident:', { incidentId, status });
//       const response = await adminApi.patch(`/admin/incidents/${incidentId}`, {
//         status,
//       });
//       console.log('✅ Incident Updated');
//       return response;
//     } catch (error) {
//       console.error('❌ Update Incident Error:', error);
//       throw error;
//     }
//   }
// }



// export const adminService = new AdminService();




import adminApi from './adminApi';
import { saveAdminAuth } from '../utils/adminSecureStorage';
import { saveAuth } from '../utils/secureStorage';

export interface DashboardStats {
  activeTrips: number;
  alerts: number;
  uptime: number;
  systemStatus: string;
  lastUpdated: string;
}

export interface AdminLoginResponse {
  token: string;
  admin: {
    id: string;
    email: string;
    role: string;
    name?: string;
  };
}

export interface HeatmapData {
  location: string;
  density: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Incident {
  id: string;
  type: string;
  location: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
  description: string;
}

export interface ReportData {
  id: string;
  type: string;
  location: string;
  generatedAt: string;
  downloadUrl: string;
}

class AdminService {
  /**
   * Admin login - Backend call
   */
  async login(email: string, password: string): Promise<AdminLoginResponse> {
    try {
      console.log('🔑 Admin Login Request:', { email });
      const response = await adminApi.post('/admin/login', { email, password });
      console.log('✅ Admin Login Success:', response);
      
      // ✅ Save to BOTH admin storage AND regular storage
      // This ensures the user context picks it up
      await saveAdminAuth(response.token, response.admin);
      await saveAuth(response.token, response.admin);
      
      console.log('✅ Admin credentials saved to secure storage');
      
      return response;
    } catch (error) {
      console.error('❌ Admin Login Failed:', error);
      throw error;
    }
  }

  /**
   * Get dashboard statistics - Backend call
   */
  async getDashboardStats(location: string): Promise<DashboardStats> {
    try {
      console.log('📊 Fetching Dashboard Stats:', { location });
      const response = await adminApi.get('/admin/dashboard/stats', {
        params: { location },
      });
      console.log('✅ Dashboard Stats Received:', response);
      return response;
    } catch (error) {
      console.error('❌ Dashboard Stats Error:', error);
      throw error;
    }
  }

  /**
   * Get heatmap data - Backend call
   */
  async getHeatmapData(location: string): Promise<HeatmapData[]> {
    try {
      console.log('🗺️ Fetching Heatmap Data:', { location });
      const response = await adminApi.get('/admin/heatmap', {
        params: { location },
      });
      console.log('✅ Heatmap Data Received');
      return response;
    } catch (error) {
      console.error('❌ Heatmap Data Error:', error);
      throw error;
    }
  }

  /**
   * Get incidents - Backend call
   */
  async getIncidents(location: string): Promise<Incident[]> {
    try {
      console.log('⚠️ Fetching Incidents:', { location });
      const response = await adminApi.get('/admin/incidents', {
        params: { location },
      });
      console.log('✅ Incidents Received');
      return response;
    } catch (error) {
      console.error('❌ Incidents Error:', error);
      throw error;
    }
  }

  /**
   * Generate report - Backend call
   */
  async generateReport(type: string, location: string): Promise<ReportData> {
    try {
      console.log('📄 Generating Report:', { type, location });
      const response = await adminApi.post('/admin/reports/generate', {
        type,
        location,
      });
      console.log('✅ Report Generated');
      return response;
    } catch (error) {
      console.error('❌ Generate Report Error:', error);
      throw error;
    }
  }

  /**
   * Get analytics - Backend call
   */
  async getAnalytics(location: string, dateRange?: { start: string; end: string }) {
    try {
      console.log('📈 Fetching Analytics:', { location, dateRange });
      const response = await adminApi.get('/admin/analytics', {
        params: { location, ...dateRange },
      });
      console.log('✅ Analytics Received');
      return response;
    } catch (error) {
      console.error('❌ Analytics Error:', error);
      throw error;
    }
  }

  /**
   * Update incident status - Backend call
   */
  async updateIncidentStatus(incidentId: string, status: string) {
    try {
      console.log('🔄 Updating Incident:', { incidentId, status });
      const response = await adminApi.patch(`/admin/incidents/${incidentId}`, {
        status,
      });
      console.log('✅ Incident Updated');
      return response;
    } catch (error) {
      console.error('❌ Update Incident Error:', error);
      throw error;
    }
  }
}

export const adminService = new AdminService();