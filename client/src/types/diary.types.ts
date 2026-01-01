// types/diary.types.ts

export interface DiaryEntry {
  id: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  title: string;
  location: string;
  time: string;
}

export interface DiaryHeaderProps {
  isGridView: boolean;
  onToggleView: () => void;
}

export interface StatItemProps {
  icon: string;
  number: string;
  label: string;
}

export interface DiaryCardProps {
  entry: DiaryEntry;
}