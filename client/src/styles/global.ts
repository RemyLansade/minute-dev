import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    margin: 0;
    font-family: 'Monserrat', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    margin-bottom: 17px;
    margin-top: 50px;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    text-align: left;
    text-decoration: none;
  }

  .main-content {
    margin-top: 180px;
  }

  .container {
    width: 1000px;
    margin: auto;
  }
`;
