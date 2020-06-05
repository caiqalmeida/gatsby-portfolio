import styled from 'styled-components';
import media from 'styled-media-query';

import { opacity, gradientMoveDiagonal } from '../styles/animations';
import colors from '../constants/colors'

const PageContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  padding: 15vh 12vw 0;
  overflow-y: scroll;

  background: linear-gradient(45deg, #171717, #1d1d1d, #282828, #2e2e2e);
  background-size: 400% 400%;
  animation: ${gradientMoveDiagonal} 8s ease infinite, ${opacity} 0.8s linear;

  ${media.lessThan("925px")`
    background: ${colors.black};
    padding: 5vh 5vw 15vh;
  `}
`;

export default PageContentWrapper;
