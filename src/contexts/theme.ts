import { createContext } from "react";
import { ColorsDTO } from "../services/theme/contract/colors";
import { ThemeChoice } from "../services/theme/contract/theme";

export interface ThemeContextData {
  colors: ColorsDTO;
  toggleThemeColor: (theme: ThemeChoice) => void;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);
