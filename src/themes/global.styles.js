import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 100;
    font-style: normal;
  }
  
  html {
    font-family: 'Inter';
    font-size: ${({ theme }) => theme.font.htmlSize};
    background-color: ${({ theme }) => theme.colours.canvas.primary};
  }
`;

export default GlobalStyle;
