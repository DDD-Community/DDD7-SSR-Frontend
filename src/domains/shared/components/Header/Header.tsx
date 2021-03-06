import React, { useState, memo, useCallback, useRef, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { Color } from '../../constants';
import LoginModal from '../LoginModal/LoginModal';
import { UserProfile } from '../UserProfile';
import { useLoginModalStore } from '../../store/loginModal';
import { useBreakPointStore } from '../../store/breakPoint';
import { BreakPoint } from '../../hooks/useMediaQuery';
import AlarmBell from '../AlarmBell/AlarmBell';
import { css } from '@emotion/react';
import { Dropdown } from '../Dropdown';
import DropdownList from '../Dropdown/DropdownList';
import { useUserStore } from '../../store/user';
import Image from 'next/image';
import { useIsShown } from '../../hooks/useIsShown';
import { debounce } from 'lodash-es';

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

const Header = ({ openTabMenu }: { openTabMenu: () => void }) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isShown, onOpen, onclose] = useIsShown(false);
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>((router.query.text as string) || '');
  const { showModal, showOnModal, showOffModal } = useLoginModalStore();
  const [searchInputPlaceholder, setSearchInputPlaceholder] = useState('검색어를 입력하세요.');

  const { isMobile } = useBreakPointStore();
  const { user } = useUserStore();

  const goToSearchPage = useCallback(
    debounce((text: string) => {
      router.push({
        pathname: '/search',
        query: {
          text,
        },
      });
    }, 250),
    [router],
  );

  const onChangeTextOnSearchBar = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setSearchText(text);

      goToSearchPage(e.target.value);
      e.target.focus();
    },
    [goToSearchPage],
  );

  const searchInputOnFocus = () => {
    setSearchInputPlaceholder('');
  };

  const searchInputOnBlur = () => {
    setSearchInputPlaceholder('검색어를 입력하세요.');
  };

  useEffect(() => {
    const isSearchPage = router.pathname.includes('/search');
    if (ref.current && isSearchPage) {
      ref.current.focus();
    }
  }, [router.pathname]);

  return (
    <>
      <HeaderContainer>
        {!isShown || !isMobile ? <Logo onClick={() => Router.push('/')} /> : <div></div>}

        {!isMobile && (
          <SearchBarContainer>
            <TextInput
              ref={ref}
              value={searchText}
              placeholder={searchInputPlaceholder}
              variant="search"
              onChange={onChangeTextOnSearchBar}
              onBlur={searchInputOnBlur}
              onFocus={searchInputOnFocus}
            />

            <SearchBarMag>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.66683 1.33337C9.6146 1.33337 12.0002 3.72192 12.0002 6.66705C12.0002 7.95942 11.5405 9.14481 10.7753 10.0681L14.687 13.9798L13.9799 14.6869L10.0683 10.7752C9.14536 11.5401 7.96021 12 6.66683 12C3.71975 12 1.3335 9.61115 1.3335 6.66705C1.3335 3.72192 3.71975 1.33337 6.66683 1.33337ZM6.66683 2.33337C4.27285 2.33337 2.3335 4.27339 2.3335 6.66705C2.3335 9.05989 4.27307 11 6.66683 11C9.06102 11 11.0002 9.06015 11.0002 6.66705C11.0002 4.27313 9.06124 2.33337 6.66683 2.33337Z"
                  fill="white"
                />
              </svg>
            </SearchBarMag>
          </SearchBarContainer>
        )}

        <div style={{ display: 'flex' }}>
          {user ? (
            <div>
              {!isMobile && (
                <div css={nameCardCss}>
                  <AlarmBell />
                  <UserProfile user={user} />
                </div>
              )}
            </div>
          ) : !isMobile ? (
            <Button color="Gray800" size="small" onClick={showOnModal}>
              로그인
            </Button>
          ) : null}
          {isMobile && isShown && (
            <MobileSearchBarContainer>
              <div css={MobileSearchBack} onClick={onclose}>
                <Image src="/left_arrow.svg" alt="leftArrow" width={11} height={17} />
              </div>
              <TextInput
                ref={ref}
                value={searchText}
                placeholder="검색어를 입력하세요"
                variant="search"
                onChange={onChangeTextOnSearchBar}
                onBlur={searchInputOnBlur}
                onFocus={searchInputOnFocus}
              />

              <MobileSearchBarMag>
                <Image src="/mag.svg" alt="mgnifier" width={16} height={16} />
              </MobileSearchBarMag>
            </MobileSearchBarContainer>
          )}
          {isMobile && (
            <div css={mobileTabContainer}>
              <div style={{ cursor: 'pointer' }} onClick={onOpen}>
                <Image src="/mag.svg" alt="mgnifier" width={23} height={23} />
              </div>
              <div onClick={openTabMenu} style={{ marginLeft: '15px', marginTop: '3px', cursor: 'pointer' }}>
                <Image src="/hambergur.png" alt="menu" width={20} height={18} />
              </div>
            </div>
          )}
        </div>

        <ReactModal
          ariaHideApp={false}
          isOpen={showModal}
          onRequestClose={showOffModal}
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
          <LoginModal onClose={showOffModal} />
        </ReactModal>
      </HeaderContainer>
    </>
  );
};

export default memo(Header);

const HeaderContainer = styled.header`
  position: relative;
  background-color: ${Color.Gray900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 92px;
  ${BreakPoint.Mobile()} {
    padding: 0 40px;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  position: relative;
  width: 327px;
`;

const MobileSearchBarContainer = styled.div`
  z-index: 2;
  display: flex;
  position: absolute;
  margin: auto;
  padding: 0 25px 0 20px;
  left: 0;
  width: 100%;
`;

const MobileSearchBack = css`
  display: flex;
  width: 25px;
`;

const SearchBarMag = styled.div`
  position: absolute;
  top: 12px;
  right: 26px;
`;

const MobileSearchBarMag = styled.div`
  position: absolute;
  top: 12px;
  right: 45px;
`;

const nameCardCss = css`
  display: flex;
  width: 161px;
  height: 32px;
  justify-content: space-between;
  align-items: center;
`;

const mobileTabContainer = css`
  display: flex;
`;
