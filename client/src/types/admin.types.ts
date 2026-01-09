export interface DashboardStats {
  activeTrips: number;
  alerts: number;
  uptime: number;
  systemStatus: string;
  lastUpdated: string;
}

export interface MenuItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  route: string;
}