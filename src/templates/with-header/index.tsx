import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/header";

import { WithHeaderTemplateContainer } from "./styles";

export const WithHeaderTemplate = () => {
  return (
    <WithHeaderTemplateContainer>
      <HeaderComponent />
      <section>
        <Outlet />
      </section>
    </WithHeaderTemplateContainer>
  );
};
