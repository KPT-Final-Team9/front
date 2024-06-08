import * as LocalIcons from '@/asset/Icons';
export interface DummyDataProps {
  [index: string]: any;
  id: number;
}

export interface BuildingSelectboxProps {
  lists: DummyDataProps[];
  optionKey: string;
  size?: 'addIconLarge' | 'addIconShort' | 'quarter';
  icon?: 'BuildingIcon' | 'CalendarIcon' | 'RoomIcon';
  showIcon?: boolean;
  onChange: (option: { title: string; id: string }) => void | ((selectedBuilding: string) => void);
  disableSort?: boolean;
}
