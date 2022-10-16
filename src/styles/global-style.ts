import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  :root {
    @media(max-width: 700px) {
      font-size: 80%;
    }

    @media(max-width: 400px) {
      font-size: 65%;
    }


  }

  body, #root {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.dynamic.background};
    color: ${({ theme }) => theme.dynamic.text};

    font-family: "Roboto", sans-serif;

    }


  h1, h2, h3, h4, h5, h6 {
    font-family: "Baloo 2", sans-serif;
  }

  h1 {
    color: ${({ theme }) => theme.dynamic.title}
  }

  h2, h3, h4, h5, h6, small {
    color: ${({ theme }) => theme.dynamic.subtitle}
  }

  button { 
    cursor: pointer;
  }
`;
