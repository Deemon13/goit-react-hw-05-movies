import { css } from '@emotion/react';

export const GlobalStyles = css`
  :root {
    position: relative;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-size: 62.5%;
    background-color: #ffffff;
  }

  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  p {
    margin: 0px;
    padding: 0px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-family: inherit;
    vertical-align: baseline;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .activeLink {
    color: red;
  }
`;
