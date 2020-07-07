import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 20px;
    background: #F7F9FB;
  }

  button {
    cursor: pointer;
  }

`;
