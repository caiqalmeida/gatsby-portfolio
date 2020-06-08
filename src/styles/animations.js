import { keyframes } from 'styled-components';

const bounce = keyframes`
  0%,
    20%,
    53%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    40%,
    43% {
        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
        transform: translate3d(0, -30px, 0) scaleY(1.1);
    }
    70% {
        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
        transform: translate3d(0, -15px, 0) scaleY(1.05);
    }
    80% {
        -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translateZ(0) scaleY(0.95);
        transform: translateZ(0) scaleY(0.95);
    }
    90% {
        -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
        transform: translate3d(0, -4px, 0) scaleY(1.02);
    }

`;
const pulse = keyframes`
0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    50% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`;

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const gradientMoveDiagonal = keyframes`
  0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
`;

const gradientMoveRight = keyframes`
  from {background-position: 0% 0%;}
  to {background-position: 50% 0%;}
`;


export { bounce, pulse, opacity, gradientMoveDiagonal, gradientMoveRight };
