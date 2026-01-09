// ============================================================================
import { useState, useEffect } from 'react';
import { adminService, DashboardStats } from '../services/admin.service';

interface UseDashboardDataReturn {
  stats: DashboardStats;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export const useDashboardData = (location: string): UseDashboardDataReturn => {
  const [stats, setStats] = useState<DashboardStats>({
    activeTrips: 0,
    alerts: 0,
    uptime: 0,
    systemStatus: 'loading',
    lastUpdated: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('📊 Fetching dashboard data for:', location);
      
      const data = await adminService.getDashboardStats(location);
      console.log('✅ Dashboard data received:', data);
      
      setStats(data);
    } catch (err: any) {
      const errorMessage = err.message || err || 'Failed to fetch dashboard data';
      setError(errorMessage);
      console.error('❌ Error fetching dashboard data:', errorMessage);
      
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

  useEffect(() => {
    fetchData();
  }, [location]);

  return {
    stats,
    loading,
    error,
    refresh: fetchData,
  };
};