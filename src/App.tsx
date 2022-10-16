import { AppProvider } from "./providers/app";
import { AppRoutes } from "./lib/react-router-dom/routes";

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
