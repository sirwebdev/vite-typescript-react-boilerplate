import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../../pages/home";
import { WithHeaderTemplate } from "../../../templates/with-header";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WithHeaderTemplate />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
