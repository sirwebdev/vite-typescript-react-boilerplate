import styled from "styled-components";

export const HomePageContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  gap: 2rem;

  max-width: 70rem;

  margin: 0 auto;

  > section {
    display: flex;
    flex-direction: column;

    height: 100%;
    gap: 1rem;

    justify-content: center;
    align-items: center;

    > h1 {
      font-size: 2.5rem;
    }

    > small {
      font-size: 1rem;
      color: gray;
    }
  }
`;
