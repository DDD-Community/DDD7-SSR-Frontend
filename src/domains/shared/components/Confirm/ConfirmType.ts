import { ColorType } from '../../constants';

export interface ConfirmProps {
  isShown: boolean;
  onClose: () => void;

  description: string;
  buttonText: string;
  buttonTextColor?: ColorType;
  onConfirm?: () => void;
}
