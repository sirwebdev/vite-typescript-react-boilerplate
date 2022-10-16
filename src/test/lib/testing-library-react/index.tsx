import {
  render as testingReactRender,
  RenderOptions,
} from "@testing-library/react";
import { FC, PropsWithChildren } from "react";
import { AppProvider } from "../../../providers/app";

const AppWrapper: FC<PropsWithChildren> = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

const customTestingReactRender = (
  Ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return testingReactRender(<AppWrapper>{Ui}</AppWrapper>, options);
};

export * from "@testing-library/react";
export { customTestingReactRender as render };
