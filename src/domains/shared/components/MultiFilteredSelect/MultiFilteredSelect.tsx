import { css } from '@emotion/react';
import { MouseEvent, useRef, useState } from 'react';
import { Color } from '../../constants';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

interface MultiFilteredSelectProps {
  onChangeSelectValue: (event: MouseEvent<HTMLElement>) => void;
  options: { label: string; value: string }[];
  value: string;
}

const MultiFilteredSelect = ({ value, onChangeSelectValue, options }: MultiFilteredSelectProps) => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => {
    setIsShown(false);
  });

  const onToggleSelect = () => {
    setIsShown(!isShown);
  };

  return (
    <div ref={ref} css={{ position: 'relative' }}>
      <div css={filteredSelectContainer} onClick={() => onToggleSelect()}>
        <div css={filteredSelectItem}>
          <div>{value === 'weekly' ? '이번 주' : '이번 달'}</div>
          <div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.53837 5.74442C2.26499 5.47107 2.26495 5.02786 2.5383 4.75447C2.79343 4.49931 3.19652 4.48227 3.47141 4.70337L3.52825 4.7544L7.00056 8.22732L10.4734 4.75443C10.7286 4.49929 11.1317 4.48228 11.4065 4.7034L11.4634 4.75443C11.7185 5.00958 11.7355 5.41267 11.5144 5.68754L11.4634 5.74438L7.49612 9.71163C7.24099 9.96676 6.83792 9.98378 6.56305 9.76269L6.50621 9.71167L2.53837 5.74442Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      {isShown && (
        <div css={filteredDropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              css={filteredDropdownList}
              onClick={(e) => {
                onChangeSelectValue(e);
                setIsShown(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const filteredSelectContainer = css`
  width: 70px;
  height: 32px;
  background: ${Color.Gray800};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const filteredSelectItem = css`
  width: 52px;
  font-size: 12px;
  color: ${Color.Gray600};
  display: flex;
  justify-content: space-between;
`;

const filteredDropdown = css`
  padding: 10px 0 10px 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 50px;
  right: 0;
  width: 151px;
  border-radius: 8px;
  background-color: ${Color.Gray800};
  color: ${Color.White100};
`;

const filteredDropdownList = css`
  font-size: 14px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  list-style: none;
  background-color: ${Color.Gray800};
  transition: background 0.25s ease-in-out;
  color: ${Color.Gray300};
  padding: 15px 27px 9px 16px;
  cursor: pointer;
  justify-content: center;

  &:hover {
    background-color: ${Color.Gray750};
  }
`;

export default MultiFilteredSelect;
