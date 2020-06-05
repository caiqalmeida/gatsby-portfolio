import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

import colors from '../constants/colors';

import { pulse } from '../styles/animations'
import { FaHamburger } from 'react-icons/fa';

const HeaderContainer = styled.div`
  padding: 0 2.5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 2;
  height: 15vh;

  ${media.lessThan("925px")`
    padding: 0 8%;
    background: ${colors.lightBlack};
    top: unset;
    bottom: 0;
    z-index:999;
    height: 10vh;
  `}
`;

const HeaderWrapper = styled.header`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  animation: ${pulse} 1.5s ease infinite;

  ${media.lessThan("925px")`
    width: 25px;
    height: 25px;
  `}
`;

const MenuButtonIcon = styled(FaHamburger)`
  width: 100%;
  height: 100%;
  color: #707070;
`;

const HeaderTitleWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  ${media.lessThan("925px")`
    flex-direction: row;
  `}
`;

const HeaderTitle = styled.span`
  font-size: 24px;
  color: ${(props) => props.color};
  font-weight: 300;
  letter-spacing: 0.1em;
  ${media.lessThan("925px")`
    font-size: 18px;
  `}
`;

const Header = ({ handleSidebar }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitleWrapper to="/">
          <HeaderTitle color="#5386e4">{'{caíque'}</HeaderTitle>
          <HeaderTitle color="#47e5bc">{'almeida}'}</HeaderTitle>
        </HeaderTitleWrapper>
        <MenuButton onClick={() => handleSidebar()}>
          <MenuButtonIcon />
        </MenuButton>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
