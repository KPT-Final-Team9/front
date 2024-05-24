export interface dummyDataProps {
  id: number;
  room: string;
  buildingName: string;
  quarter: string;
}

export interface BuildingSelectboxProps {
  lists: dummyDataProps[];
  onChange: (selectedBuilding: string) => void;
}
