import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #444;
    font-size: 14px;
    font-family: monospace, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
