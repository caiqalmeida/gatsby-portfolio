import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

import SocialIcons from './SocialIcons';

const SidebarContainer = styled.div`
  right: ${(props) => (props.sidebarActive ? '0' : '-500px')};
  opacity: ${(props) => (props.sidebarActive ? '1' : '0')};
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 6%;
  transition: all 0.3s linear;
  background-color: #2b2b2d;
  z-index: 999;

  ${media.lessThan("925px")`
    right: ${(props) => (props.sidebarActive ? 'unset' : 'unset')};
    top: unset;
    bottom: ${(props) => (props.sidebarActive ? '0' : '-500px')};
    height: auto;
    width: 100vw;
    padding-bottom: 13vh;
    z-index: 998;
  `}
`;

const SidebarWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  font-size: 24px;
  color: #707070;
  font-weight: 400;
  transition: color 0.5s linear;
  align-self: flex-start;

  &:hover {
    color: #5386e4;
  }
`;

const SidebarMenu = styled.ul`
  /* margin-top: 100px;
  margin-bottom: 20px; */
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #707070;
  font-weight: 700;
  text-align: center;
  display: block;
  transition: color 0.5s linear;
  font-size: 20px;
  letter-spacing: 1px;

  &:hover {
    color: #5386e4;
  }

  &.active {
    color: #5386e4;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const Sidebar = ({ handleSidebar, sidebarActive }) => {
  return (
    <SidebarContainer sidebarActive={sidebarActive}>
      <SidebarWrapper>
        <CloseButton onClick={() => handleSidebar()}>X</CloseButton>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/sobre" onClick={() => handleSidebar()}>
              Sobre
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/projetos" onClick={() => handleSidebar()}>
              Projetos
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/blog" onClick={() => handleSidebar()}>
              Blog
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>

        <FlexCenter>
          <SocialIcons />
        </FlexCenter>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
