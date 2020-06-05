---
title: Mussum Ipsum o melhor ipsum do mundis
description: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi'
date: '2019-08-22 08:51:23'
category: jekyll
background: '#B31917'
image: "/assets/img/desert.jpg"
---
## Mussum Ipsum o melhor ipsum do mundis

Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

![Desert](/assets/img/desert.jpg)

```jsx
import React from 'react';
import styled from 'styled-components';

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
  margin-top: 100px;
  margin-bottom: 20px;
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

``` 

A ordem dos tratores não altera o pão duris. Viva Forevis aptent taciti sociosqu ad litora torquent. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus.

Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mé, boa gentis num é.

### Nois bebis

- Cevadis
- Lupulis
- Drinks

### Uma frasis de impactis

>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Aenean aliquam molestie leo, vitae iaculis nisl. Cevadis im ampola pa arma uma pindureta. Casamentiss faiz malandris se pirulitá.

## E para fecharis

Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
