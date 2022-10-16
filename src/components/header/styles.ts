import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;

  max-width: 70rem;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  a > img {
    width: fit-content;

    max-width: 5rem;
    min-width: 2.5rem;
  }

  > section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;
