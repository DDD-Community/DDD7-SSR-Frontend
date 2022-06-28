import { memo } from 'react';

import { IconType, iconList } from './IconList';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon: IconType;
  useDot?: boolean;
  size: number;
}

const Icon = ({ className, icon, color = 'white', size = 24, useDot, ...props }: IconProps) => {
  if (!icon) {
    return <></>;
  }

  const SvgIcon = iconList[icon];

  return <SvgIcon {...props} className={className} color={color} width={size} height={size} />;
};

export default memo(Icon);
