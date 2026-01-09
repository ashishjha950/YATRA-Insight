import { colors } from '../theme/adminTheme';
import { MenuItem } from '../types/admin.types';

export const LOCATIONS = [
  'All India',
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
];

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: 'map',
    title: 'Heatmap View',
    description: 'Tourist density & movement',
    color: colors.cyan,
    route: 'HeatmapView',
  },
  {
    icon: 'bar-chart',
    title: 'Analytics Dashboard',
    description: 'Tourism insights & trends',
    color: colors.blue,
    route: 'Analytics',
  },
  {
    icon: 'warning',
    title: 'Incident Monitor',
    description: 'Live safety incidents',
    color: colors.orange,
    route: 'IncidentMonitor',
  },
  {
    icon: 'document-text',
    title: 'Reports',
    description: 'Generate & export reports',
    color: colors.darkBlue,
    route: 'Reports',
  },
];
