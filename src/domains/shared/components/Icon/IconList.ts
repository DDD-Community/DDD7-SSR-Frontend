import SearchIcon from './Icons/SearchIcon';
import CheckIcon from './Icons/CheckIcon';
import CloseIcon from './Icons/CloseIcon';
import BackIcon from './Icons/BackIcon';

export const iconList = {
  Search: SearchIcon,
  Check: CheckIcon,
  Close: CloseIcon,
  Back: BackIcon,
} as const;

export type IconType = keyof typeof iconList;
