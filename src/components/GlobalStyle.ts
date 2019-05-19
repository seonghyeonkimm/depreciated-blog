import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Spoqa Han Sans';
      font-weight: 700;
      src: local('Spoqa Han Sans Bold'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansBold.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansBold.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansBold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Spoqa Han Sans';
      font-weight: 400;
      src: local('Spoqa Han Sans Regular'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansRegular.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansRegular.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansRegular.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Spoqa Han Sans';
      font-weight: 300;
      src: local('Spoqa Han Sans Light'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansLight.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansLight.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansLight.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Spoqa Han Sans';
      font-weight: 100;
      src: local('Spoqa Han Sans Thin'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansThin.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansThin.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansThin.ttf') format('truetype');
  }

  html, body {
    font-family: Spoqa Han Sans;
  }

  a {
    color: black;
    text-decoration: none;
    box-shadow: none;
  }

  main a {
    font-weight: bold;
    text-decoration: underline;
  }

  blockquote {
    margin: auto;
  }

  main div ul,
  main div ol {
    margin: 1.75em !important;
  }

  li {
    margin-bottom: calc(1.75rem / 3);
  }

  h1, h2, h3 {
    line-height: 1.3;
  }

  @media only screen and (max-width: 480px) {
    ul, ol {
      margin-left: auto;
    }
  }
`

export default GlobalStyle;
