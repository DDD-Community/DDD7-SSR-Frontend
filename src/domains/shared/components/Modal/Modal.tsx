import { css } from '@emotion/react';
import React from 'react';
import ReactModal from 'react-modal';

const ModalSizesMapper = {
  default: '520px',
  full: '100%',
};

export type ModalSizeType = 'default' | 'full';

export type ModalProps = {
  isShown: boolean;
  onClose: Function;
  onAfterOpen?: Function;
  htmlOpenClassName?: string;
  bodyOpenClassName?: string;
  overlayClassName?: string;
  portalClassName?: string;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscapePress?: boolean;
  position?: 'center' | 'top';
  topOffset?: number | string;
  title?: string;
  size?: ModalSizeType;
  allowInlineHeightOverflow?: boolean;
  allowHeightOverflow?: boolean;
  className?: string;
  children: any;
} & typeof defaultProps;

const defaultProps = {
  shouldCloseOnEscapePress: true,
  shouldCloseOnOverlayClick: true,
  position: 'center',
  topOffset: '50px',
  size: 'medium',
  allowHeightOverflow: false,
};

const Modal = ({
  isShown,
  size,
  topOffset,
  position,
  shouldCloseOnEscapePress,
  shouldCloseOnOverlayClick,
  onClose,
  children,
}: ModalProps) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isShown}
      shouldCloseOnEsc={shouldCloseOnEscapePress}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      portalClassName={'Modal__portal'}
      className={{
        base: `Modal__wrap${size === 'full' ? ' Modal__wrap--full' : ''}`,
        afterOpen: 'Modal__wrap--after-open',
        beforeClose: 'Modal__wrap--before-close',
      }}
      overlayClassName={{
        base: `Modal__overlay${position === 'center' ? ' Modal__overlay--centered' : ''}`,
        afterOpen: 'Modal__overlay--after-open',
        beforeClose: 'Modal__overlay--before-close',
      }}
      htmlOpenClassName={'Modal__html--open'}
      bodyOpenClassName={'Modal__body--open'}
      style={{
        content: {
          top: position === 'center' ? undefined : topOffset,
        },
      }}
      closeTimeoutMS={300}
      onAfterClose={() => {
        onClose?.();
      }}
      onRequestClose={() => {
        onClose?.();
      }}
    >
      <div
        style={{
          // @ts-ignore
          width: ModalSizesMapper[size],
        }}
        css={css`
          ${modalStyle}
          ${fullWidthStyle}
        `}
      >
        {children}
      </div>
    </ReactModal>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;

const modalStyle = css`
  transition: opacity 0.3s ease-in-out, transform 0.3s cubic-bezier(0.13, 0.62, 0.11, 0.99),
    -webkit-transform 0.3s cubic-bezier(0.13, 0.62, 0.11, 0.99);
  opacity: 1;
  margin: calc(1rem * (50 / 16));
  border-radius: 13px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  max-height: calc(100vh - 1rem * (100 / 16));
  max-width: calc(100vw - 1rem * (100 / 16));
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const fullWidthStyle = css`
  max-width: none;
  max-height: none;
  border-radius: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`;
