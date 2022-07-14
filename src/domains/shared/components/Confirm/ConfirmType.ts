export interface ConfirmProps {
  isShown: boolean;
  onClose: () => void;

  description: string;
  buttonText: string;
  onConfirm?: () => void;
}
