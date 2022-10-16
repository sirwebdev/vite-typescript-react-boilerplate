import { ColorsDTO } from "./colors";
import { themeChoices } from "../../../themes";

export type ThemeChoice = keyof typeof themeChoices;

export interface ThemeContract {
  getThemeColors: (type: ThemeChoice) => ColorsDTO;
}
