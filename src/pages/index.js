import React from "react"
import styled from 'styled-components';
import media from 'styled-media-query';

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageContentWrapper from '../components/PageContentWrapper';
import SocialIcons from '../components/SocialIcons';

const HomeWrapper = styled(PageContentWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan("925px")`
    max-height: 100%;
    overflow: hidden;
  `}
`;

const HomeTitle = styled.h2`
  font-size: 65px;
  font-weight: 300;

  ${media.lessThan('1281px')`
    font-size: 50px;
  `}

  ${media.lessThan('990px')`
    font-size: 45px;
  `}

  ${media.lessThan('medium')`
    font-size: 30px;
  `}

  ${media.lessThan('320px')`
    font-size: 20px;
  `}
`;

const HomeTitleSpan = styled.span`
  font-size: 100px;
  font-weight: 500;
  display: block;
  color: ${(props) => props.color};

  ${media.lessThan('1281px')`
    font-size: 80px;
  `}

  ${media.lessThan('990px')`
    font-size: 60px;
  `}

  ${media.lessThan('medium')`
    font-size: 40px;
  `}
`;

const HomeSubtitle = styled.h3`
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-weight: 300;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeWrapper>
      <HomeTitle>
        Olá, sou um
        <HomeTitleSpan color="#5386e4">desenvolvedor web</HomeTitleSpan>
        apaixonado por
        <HomeTitleSpan color="#47e5bc">javascript</HomeTitleSpan>e suas
        possibilidades infinitas.
      </HomeTitle>
      <HomeSubtitle>
        Dica: navegue clicando na minha comida preferida
      </HomeSubtitle>
      <SocialIcons />
    </HomeWrapper>
  </Layout>
)

export default IndexPage
