import SearchIcon from './Icons/SearchIcon';
import CheckIcon from './Icons/CheckIcon';
import CloseIcon from './Icons/CloseIcon';
import BackIcon from './Icons/BackIcon';
import ExclamationIcon from './Icons/ExclamationIcon';

export const iconList = {
  Search: SearchIcon,
  Check: CheckIcon,
  Close: CloseIcon,
  Back: BackIcon,
  Exclamation: ExclamationIcon,
} as const;

export type IconType = keyof typeof iconList;
