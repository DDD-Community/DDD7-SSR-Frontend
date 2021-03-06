import React from 'react';

export type ButtonSizeType = 'large' | 'medium' | 'small';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: 'Gray700' | 'Gray800' | 'Gray500' | 'Gray300' | 'Primary100' | 'transparent' | 'Red100';
  size?: ButtonSizeType;
  fixedWidth?: number;
  isLoading?: boolean;
  disabled?: boolean;
}
