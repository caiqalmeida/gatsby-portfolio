import React from 'react';
import styled from 'styled-components';

import {
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BaseIconStyle = `
color: #707070;
width: 36px;
height: 36px;
cursor: pointer;
transition: all .3s linear;
  &:hover {
    color: #47E5BC;
    transform: scale(1.2);
  }
  `;

const IconLinkedin = styled(TiSocialLinkedinCircular)`
  ${BaseIconStyle}
`;

const IconTwitter = styled(TiSocialTwitterCircular)`
  ${BaseIconStyle}
`;

const IconGithub = styled(TiSocialGithubCircular)`
  ${BaseIconStyle}
`;

const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      <a
        href="https://www.linkedin.com/in/caiquedalmeida/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLinkedin />
      </a>
      <a
        href="https://twitter.com/caiqalmeida"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTwitter />
      </a>
      <a
        href="https://github.com/caiqalmeida"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGithub />
      </a>
    </SocialIconsWrapper>
  );
};

export default SocialIcons;
