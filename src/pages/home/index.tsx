import { FC } from "react";

import { HomePageContainer } from "./styles";

export const HomePage: FC = () => {
  return (
    <HomePageContainer>
      <section>
        <h1>Vite + Typescript + Vitest</h1>

        <small>Edit src/app/home to change something</small>
      </section>
    </HomePageContainer>
  );
};
