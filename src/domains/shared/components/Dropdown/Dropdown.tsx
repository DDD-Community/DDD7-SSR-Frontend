import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { Color } from '../../constants';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { DropdownProps } from './DropdownType';

function Dropdown({
  title,
  TitleComponent,
  listNamesAndCallback,
  ListComponent,
  setTogleIcon,
  width = '151px',
}: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => {
    setOpen(false);
    if (setTogleIcon) setTogleIcon(false);
  });

  const onClickkNameCard = () => {
    setOpen(!open);
    if (setTogleIcon) setTogleIcon(!open);
  };

  return (
    <DropdownContainer ref={ref}>
      <a onClick={onClickkNameCard}>{TitleComponent ? TitleComponent : <h1>{title}</h1>}</a>
      {open ? (
        <DropdownListcontainer width={width}>
          {ListComponent
            ? listNamesAndCallback.map((item) => (
                <ListComponent
                  key={item.name}
                  name={item.name}
                  onClick={item.callbackFn ? item.callbackFn : () => {}}
                />
              ))
            : listNamesAndCallback.map((item) => (
                <div key={item.name} onClick={item.callbackFn}>
                  {item.name}
                </div>
              ))}
        </DropdownListcontainer>
      ) : null}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 98px;
  height: 32px;
  margin-left: 11px;
  cursor: pointer;
`;

const DropdownListcontainer = styled.div<{ width: string }>`
  padding: 10px 0 10px 0;
  z-index: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 50px;
  right: -37px;
  width: ${(props) => props.width};
  height: 220px;
  border-radius: 8px;
  background-color: ${Color.Gray800};
  color: ${Color.White100};
`;

export default Dropdown;
