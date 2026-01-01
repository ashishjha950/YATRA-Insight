// data/diaryData.ts

import { DiaryEntry } from '../types/diary.types';

export const diaryEntries: DiaryEntry[] = [
  {
    id: '1',
    icon: 'camera-outline',
    iconColor: '#FFA726',
    iconBg: '#FFF3E0',
    title: 'Golden Gate Bridge at sunset',
    location: 'San Francisco, CA',
    time: '6:45 PM',
  },
  {
    id: '2',
    icon: 'document-text-outline',
    iconColor: '#42A5F5',
    iconBg: '#E3F2FD',
    title: "Amazing seafood at Fisherman's Wharf. Must try the clam chowder!",
    location: 'San Francisco, CA',
    time: '1:30 PM',
  },
  {
    id: '3',
    icon: 'camera-outline',
    iconColor: '#26C6DA',
    iconBg: '#E0F7FA',
    title: 'Beautiful coastal drive',
    location: 'Highway 1',
    time: '10:00 AM',
  },
  {
    id: '4',
    icon: 'mic-outline',
    iconColor: '#FFA726',
    iconBg: '#FFF3E0',
    title: 'Voice note about the journey',
    location: 'Monterey Bay',
    time: '9:15 AM',
  },
];