import React, { useState, memo, useCallback } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { Color } from '../../constants';
import Loginmodal from '../LoginModal/LoginModal';
import { useLoginModalStore } from '../../store/modal';
import { useOnUser } from '../../hooks/useOnUser';
import { UserProfile } from '../UserProfile';

const customStyles = {
  overlay: {
    backgroundColor: 'black',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '320px',
    backgroundColor: `${Color.Gray800}`,
    borderRadius: '16px',
    border: 'none',
  },
};

const Header = () => {
  const [searchText, setSearchText] = useState<string>('');
  const { showModal, showOnModal, showOffModal } = useLoginModalStore();
  const [isLoggedIn] = useOnUser();

  const onChangeTextOnSearchBar = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
  }, []);

  const openModal = useCallback(() => {
    showOnModal();
  }, []);

  const closeModal = useCallback(() => {
    showOffModal();
  }, []);

  return (
    <HeaderContainer>
      <Logo onClick={() => Router.push('/')} />
      <SearchBarContainer>
        <TextInput
          value={searchText}
          placeholder="검색어를 입력하세요"
          variant="search"
          onChange={onChangeTextOnSearchBar}
        />
      </SearchBarContainer>
      {isLoggedIn ? (
        <UserProfile />
      ) : (
        <Button color="Gray800" size="small" onClick={openModal}>
          로그인
        </Button>
      )}
      <ReactModal
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example"
        overlayClassName={{
          base: `Modal__overlay Modal__overlay--centered`,
          afterOpen: 'Modal__overlay--after-open',
          beforeClose: 'Modal__overlay--before-close',
        }}
        bodyOpenClassName={'Modal__body--open'}
        closeTimeoutMS={300}
      >
        <Loginmodal />
      </ReactModal>
    </HeaderContainer>
  );
};

export default memo(Header);

const HeaderContainer = styled.header`
  background-color: ${Color.Gray900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 92px;
`;

const SearchBarContainer = styled.div`
  width: 327px;
`;
