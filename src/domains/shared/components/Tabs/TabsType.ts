import React from 'react';
import { TextType } from '../Text/Text';

interface Tab {
  value: string;
  label: React.ReactNode;
}
export interface TabsProps {
  tabList: Tab[];
  tabGap?: number;
  useInlineTab?: boolean;
  onTabChange: (value: string) => void;
  useUpperLine?: boolean;
}
