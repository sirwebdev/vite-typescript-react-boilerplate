import { useContext } from "react";
import { ThemeContext, ThemeContextData } from "../contexts";

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("Cannot use hook 'useTheme' without a 'ThemeProvider'.");

  return context;
};
