interface Tab {
  value: string;
  label: string;
}
export interface TabsProps {
  tabList: Tab[];
  onTabChange: (value: string) => void;
}
