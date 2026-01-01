// src/constants/trackData.ts

export const liveTripStats = {
  distanceKm: 24.9,
  duration: '2h 0m',
  placesVisited: 3,
  progressPercent: 60,
};

export const quickActions = [
  {
    id: '1',
    label: 'Add Expense',
    icon: 'add',
    color: '#FF9800',
    route: 'Expenses',
  },
  {
    id: '2',
    label: 'Add Note',
    icon: 'create',
    color: '#2196F3',
    route: 'Diary',
  },
];

export const mapMockData = {
  center: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
  routeCoordinates: [
    { latitude: 37.7749, longitude: -122.4194 },
    { latitude: 37.7849, longitude: -122.4094 },
    { latitude: 37.7949, longitude: -122.3994 },
  ],
};

export const tripStatus = {
  isLive: true,
  startedAt: '2024-12-18T10:30:00Z',
  lastUpdated: '2024-12-18T12:30:00Z',
};
