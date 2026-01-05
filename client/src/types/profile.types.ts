// src/types/profile.types.ts

// export interface User {
//   name: string;
//   email: string;
//   phone?: string;
//   avatar?: string;
// }

// export interface StatCardProps {
//   label: string;
//   value: string;
// }

// export interface SettingItemProps {
//   title: string;
//   icon?: string;
//   iconBgColor?: string;
//   badge?: string;
//   danger?: boolean;
//   onPress?: () => void;
// }

// export interface ProfileHeaderProps {
//   user: User;
//   onEditPress: () => void;
// }

// export interface ProfileStatsProps {
//   trips: string;
//   miles: string;
//   spent: string;
// }

// export type ProfileStackParamList = {
//   Profile: undefined;
//   EditProfile: undefined;
// };



// src/types/profile.types.ts

export interface User {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  [key: string]: any; // Allow additional backend fields
}

export interface StatCardProps {
  label: string;
  value: string;
}

export interface SettingItemProps {
  title: string;
  icon?: string;
  iconBgColor?: string;
  badge?: string;
  danger?: boolean;
  onPress?: () => void;
}

export interface ProfileHeaderProps {
  user: User | null | undefined;
  onEditPress: () => void;
}

export interface ProfileStatsProps {
  trips: string;
  miles: string;
  spent: string;
}

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};