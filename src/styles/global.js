import { css } from '@emotion/react'

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:300,400,500,600,700&display=swap');

  /* ==============  2. Reset for older browsers  ============== */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,
  input,
  button,
  select,
  textarea {
    outline: none;
  }

  strong {
    font-weight: 600;
  }

  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.645rem;
    line-height: 1.625;
  }

  html {
    /* cursor: none; */
    font-family: sans-serif; // 1
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 1.21rem;
    line-height: 1.625;
    transition: color 0.15s, background-color 0.15s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior-y: none;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a {
    outline: none;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    background-color: transparent;
  }

  a:focus {
    outline: none;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
    color: ${(p) => p.colors.articleText};
    font-family: ${(p) => p.fonts.body};
    line-height: 2.6rem;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: ${(p) => p.fonts.title};
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type='number'] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }
`
