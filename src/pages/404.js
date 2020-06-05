import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageContentWrapper from '../components/PageContentWrapper';
import Emoji from '../components/Emoji';
import { pulse } from '../styles/animations';

import colors from '../constants/colors';

const NotFoundSection = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 35vh;
  animation: ${pulse} 1s linear;
`;

const CodeCommented = styled.p`
  color: #777;
  font-style: italic;
  font-size: 1.2em;
  margin-bottom: 1vh;
`;

const CodeText = styled.p`
  color: #bdbdbd;
  font-size: 1.7em;
`;

const ColorText = styled.span`
  color: ${(props) => (props.Color ? props.Color : 'inherit')};
`;

const HomeLink = styled(Link)`
  border-bottom: 1px solid ${colors.blue};
  color: inherit;
  transition: color 0.5s linear;

  &:hover {
    color: ${colors.blue};
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageContentWrapper>
      <NotFoundSection>
        <div>
          <CodeCommented>// Erro 404, página não encontrada</CodeCommented>
          <CodeText>
            <ColorText Color={colors.blue}>if</ColorText> (
            <ColorText Color={colors.green}>!</ColorText>found) &#123;
          </CodeText>
          <CodeText>
            <ColorText Color={colors.blue}>console.log</ColorText>('
            <ColorText Color={colors.green}>
              deu erro no servidor <Emoji symbol="👀" />
            </ColorText>
            ')
          </CodeText>
          <p>&#125;</p>
          <CodeCommented>
            // Vamos voltar pra <HomeLink to="/">home</HomeLink> ?
          </CodeCommented>
        </div>
      </NotFoundSection>
    </PageContentWrapper>
  </Layout>
)

export default NotFoundPage;
