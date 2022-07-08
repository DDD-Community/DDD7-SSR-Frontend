import React from 'react';

interface Tab {
  value: string;
  label: React.ReactNode;
}
export interface TabsProps {
  tabList: Tab[];
  onTabChange: (value: string) => void;
}
