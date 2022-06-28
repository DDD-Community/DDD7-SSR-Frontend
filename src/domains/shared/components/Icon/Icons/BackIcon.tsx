/* eslint-disable max-len */
import { memo } from 'react';

function BackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.1524 3.04667C14.621 2.71853 15.3808 2.71849 15.8495 3.04658C16.2869 3.35279 16.3161 3.83662 15.9371 4.16656L15.8496 4.23478L9.896 8.40247L15.8495 12.5708C16.2869 12.8771 16.3161 13.3609 15.937 13.6908L15.8495 13.759C15.4121 14.0653 14.7211 14.0857 14.2499 13.8203L14.1525 13.759L7.35147 8.99727C6.91411 8.69105 6.88493 8.20726 7.26394 7.87734L7.35141 7.80912L14.1524 3.04667Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

const MemoBackIcon = memo(BackIcon);

export default MemoBackIcon;
