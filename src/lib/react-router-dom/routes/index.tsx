import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./public.routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
