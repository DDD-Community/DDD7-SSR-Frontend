import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { Color } from '../../constants';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { DropdownProps } from './DropdownType';

function Dropdown({ title, TitleComponent, listNamesAndCallback, ListComponent, setTogleIcon }: DropdownProps) {
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
        <DropdownListcontainer>
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
  justify-content: space-between;
  align-items: center;
  width: 98px;
  height: 32px;
`;

const DropdownListcontainer = styled.div`
  padding: 10px 0 10px 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 50px;
  width: 151px;
  height: 184px;
  border-radius: 8px;
  background-color: ${Color.Gray800};
  color: ${Color.White100};
`;

export default Dropdown;
