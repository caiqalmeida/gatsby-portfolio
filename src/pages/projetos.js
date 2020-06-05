import React from "react"
import styled from 'styled-components';
import media from 'styled-media-query';

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageContentWrapper from '../components/PageContentWrapper';
import Emoji from '../components/Emoji';
import { gradientMoveDiagonal } from '../styles/animations';

import colors from '../constants/colors';

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 35vh;
  ${media.lessThan("925px")`
    height: 100%;
    justify-content: center;
  `}
`;

const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 10vh;
  text-align: center;

  ${media.lessThan("925px")`
    font-size: 2rem;
  `}
`;

const ProjectsTitleSpan = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;

  ${media.lessThan("925px")`
    font-size: 2rem;
  `}
`;

const LoadingWrapper = styled.div`
  width: 50%;
`;

const LoadingBar = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 10px;
`;

const LoadingContent = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 10px;


  background: linear-gradient(to right, ${colors.blue}, ${colors.green});
  background-size: 200% 200%;
  animation: ${gradientMoveDiagonal} 5s linear infinite;
`;

const LoadingNumbers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoadingNumber = styled.span``;

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projetos" />
    <PageContentWrapper>
      <ProjectsSection>
        <ProjectsTitle>Projects <ProjectsTitleSpan>Under Construction</ProjectsTitleSpan> </ProjectsTitle>
        <LoadingWrapper>
          <LoadingBar>
            <LoadingContent />
          </LoadingBar>
          <LoadingNumbers>
            <LoadingNumber>0%</LoadingNumber>
            <LoadingNumber>50%</LoadingNumber>
            <LoadingNumber>100%</LoadingNumber>
          </LoadingNumbers>
        </LoadingWrapper>
        

      </ProjectsSection>
    </PageContentWrapper>
  </Layout>
)

export default ProjectsPage;
