import "styled-components";
import type { ColorsDTO } from "../services/theme/contract/colors";

declare module "styled-components" {
  export interface DefaultTheme extends ColorsDTO {}
}
