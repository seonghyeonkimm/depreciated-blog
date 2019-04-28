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

`;

export default GlobalStyle;
