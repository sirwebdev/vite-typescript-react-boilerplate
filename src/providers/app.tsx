import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
