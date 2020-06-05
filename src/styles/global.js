import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
    background-color: inherit;
  }

  body {
    position: relative;
    background-color: #171717;
    overflow: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    color: #707070;
  }

  p, span, label {
    color: #adadad;
  }

  ul {
    list-style: none;
  }

  a {
    color: #5386E4;
    text-decoration: none;
  }

  html, body, #root {
    min-height: 100%;
  }

  button {
    cursor: pointer;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;
