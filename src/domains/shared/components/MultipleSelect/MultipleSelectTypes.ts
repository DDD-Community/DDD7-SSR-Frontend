import React from 'react';

export interface ValueOption {
  key?: string | number;
  leftComponent?: React.ReactNode;
  label: string;
  value: string;
}

export interface MultipleSelectProps {
  disabled?: boolean;
  options?: ValueOption[];
  value: string[];
  onChange: (newValue: string[]) => void;
  placeholder?: string;
  emptyListMessage?: string;
}
