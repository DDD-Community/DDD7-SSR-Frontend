import { css } from '@emotion/react';
import React, { memo, useMemo, useRef, useState } from 'react';
import { Color } from '../../constants';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { Icon } from '../Icon';
import { Spacing } from '../Spacing';
import { TextInput } from '../TextInput';
import { MultipleSelectProps } from './MultipleSelectTypes';

const ESC_KEY = 'Escape';

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  options,
  onChange,
  value,
  placeholder,
  disabled,
  emptyListMessage,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [searchText, setSearchText] = useState('');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const [isFocus, setIsFocus] = useState(false);

  const renderedOptions = useMemo(() => {
    if (searchText) {
      return options?.filter((option) => option.label.includes(searchText));
    }

    return options;
  }, [searchText, options]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ESC_KEY) {
      e.currentTarget.blur();
      setIsFocus(false);
    }
  };

  useOnClickOutside(ref, () => {
    setIsFocus(false);
  });

  return (
    <>
      <div ref={ref} css={MultipleSelectContainerStyle}>
        <TextInput
          onChange={handleTextChange}
          value={searchText}
          type="text"
          onFocus={() => setIsFocus(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled}
        />
        {isFocus && renderedOptions && (
          <ul css={ListContainerStyle}>
            {renderedOptions.length > 0 ? (
              renderedOptions.map((renderedOption) => {
                const optionIndex = value.findIndex((option) => option.value === renderedOption.value);

                return (
                  <li
                    key={renderedOption.key || renderedOption.value}
                    css={ListItemStyle}
                    onClick={() => {
                      if (optionIndex >= 0) {
                        onChange(value.filter((option) => option.value !== renderedOption.value));

                        return;
                      }
                      onChange([...value, renderedOption]);
                    }}
                  >
                    {renderedOption.label}

                    {optionIndex >= 0 && (
                      <div css={IconWrapperStyle}>
                        <Icon icon="Check" color="white" size={24} />
                      </div>
                    )}
                  </li>
                );
              })
            ) : (
              <li css={ListItemStyle}>{emptyListMessage ?? 'Not Found'}</li>
            )}
          </ul>
        )}
      </div>

      <ul css={SelectedListContainerStyle}>
        {value.map((selectedOption) => (
          <li key={selectedOption.key || selectedOption.value} css={SelectedListItemStyle}>
            {selectedOption.leftComponent}
            {selectedOption.label}
            <Spacing row={6} />
            <div
              css={CloseIconWrapperStyle}
              onClick={() => {
                onChange(value.filter((option) => option.value !== selectedOption.value));
              }}
            >
              <Icon icon="Close" color={Color.Gray400} size={24} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(MultipleSelect);

const MultipleSelectContainerStyle = css`
  position: relative;
`;

const ListContainerStyle = css`
  position: absolute;
  top: 57px;
  width: 240px;
  max-height: 180px;
  background-color: ${Color.Gray800};
  overflow-y: auto;
  padding-top: 10px;
  border-radius: 8px;
  z-index: 1;
`;

const ListItemStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  list-style: none;
  background-color: ${Color.Gray800};
  transition: background 0.25s ease-in-out;
  color: ${Color.Gray300};
  padding: 6px 27px 9px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Gray750};
  }
`;

const IconWrapperStyle = css`
  position: absolute;
  display: flex;
  align-items: center;
  right: 12px;
`;

const CloseIconWrapperStyle = css`
  position: absolute;
  display: flex;
  align-items: center;
  right: 6px;
  cursor: pointer;
`;

const SelectedListContainerStyle = css`
  margin: 0;
  list-style: none;
`;

const SelectedListItemStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  color: ${Color.Gray400};
  background-color: ${Color.Gray800};
  font-size: 12px;
  line-height: 15px;
  border-radius: 32px;
  padding: 6px 30px 6px 8px;
  margin-right: 8px;
  margin-top: 12px;

  &::last-of-type {
    margin-right: 0;
  }
`;
