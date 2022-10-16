import styled from "styled-components";

export const WithHeaderTemplateContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  align-items: center;

  align-self: center;

  > section {
    position: relative;

    width: 100%;
  }

  @media (max-width: 70rem) {
    padding: 0 1rem;
  }

  @media (max-width: 700px) {
    padding: 0 0.5rem;
  }
`;
