import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import { TiDocumentText } from 'react-icons/ti';
import {
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiSass,
} from 'react-icons/di';

import ImgMeProfile from '../assets/images/perfil.jpg';
import CV from '../assets/documents/caique-almeida-desenvolvedor-web.pdf';
import colors from '../constants/colors';

import Layout from "../components/Layout"
import SocialIcons from '../components/SocialIcons';
import PageContentWrapper from '../components/PageContentWrapper';
import TextTitle from '../components/TextTitle';
import Timeline from '../components/Timeline';
import TextParagraph from '../components/TextParagraph';

const AboutSection = styled.section`
  display: flex;
  justify-content: flex-end;

  ${media.lessThan("925px")`
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  `}
`;

const AboutContentTimeline = styled.div`
  width: 55%;

  ${media.lessThan("925px")`
    width: 100%;
  `}
`;

const AboutContentProfile = styled.div`
  width: 15%;
  position: fixed;
  left: 15vw;
  max-width: 300px;

  ${media.lessThan("925px")`
    width: 100%;
    position: relative;
    left: unset;
    max-width: 100%;
    border-bottom: 1px solid white;
    padding-bottom: 5vh;
    margin-bottom: 10vh;
  `}
`;

const AboutContentItem = styled.div`
  margin-bottom: 5vh;

  ${media.lessThan("925px")`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const AboutContentImg = styled(AboutContentItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconDownloadCv = styled(TiDocumentText)`
  color: #707070;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: ${colors.blue};
    transform: scale(1.2);
  }
`;

const ProfileImg = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;
const AbilitiesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BaseTechIconStyle = `
width: 36px;
height: 36px;
transition: all .3s linear;
background: transparent;
  &:hover {
    transform: scale(1.5);
  }
  `;

const IconHtml = styled(DiHtml5)`
  ${BaseTechIconStyle}
  color: #DD4A25;
`;

const IconCss = styled(DiCss3)`
  ${BaseTechIconStyle}
  color: #118ABE;
`;

const IconSass = styled(DiSass)`
  ${BaseTechIconStyle}
  color: #C76494;
`;

const IconJavascript = styled(DiJavascript1)`
  ${BaseTechIconStyle}
  color: #F0D91B;
`;

const IconReact = styled(DiReact)`
  ${BaseTechIconStyle}
  color: #5ED4F4;
`;

const IconNode = styled(DiNodejs)`
  ${BaseTechIconStyle}
  color: #88C043;
`;

const AboutPage = () => {

  return (
    <Layout>
      <PageContentWrapper>
        <AboutSection>
        <AboutContentProfile>
            <AboutContentImg>
              <ProfileImg src={ImgMeProfile} alt="Caíque Almeida" />
            </AboutContentImg>
            <AboutContentItem>
              <TextTitle>Habilidades</TextTitle>

              <AbilitiesGrid>
                <IconHtml />
                <IconCss />
                <IconSass />
                <IconJavascript />
                <IconReact />
                <IconNode />
              </AbilitiesGrid>
            </AboutContentItem>
            <AboutContentItem>
              <TextTitle>Contato</TextTitle>

              <SocialIcons />
            </AboutContentItem>
            <AboutContentItem>
              <TextTitle>Currículo</TextTitle>
              <a href={CV} download="cv_caique_almeida">
                <IconDownloadCv />
              </a>
            </AboutContentItem>
          </AboutContentProfile>
          <AboutContentTimeline>
            <TextTitle color={colors.green} letterSpacing="0px">
              25 anos, desenvolvedor web não por formação mas por vocação.
            </TextTitle>
            <TextParagraph>
              Descobri o poder da programação no final de 2018, e desde então a
              principal coisa em que venho focando meus esforços é em aprender
              cada vez mais sobre tecnologias e suas possibilidades.
            </TextParagraph>
            <Timeline />
          </AboutContentTimeline>

        </AboutSection>
      </PageContentWrapper>
    </Layout>
  );
};

export default AboutPage;
