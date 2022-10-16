import { act, renderHook } from "@testing-library/react-hooks";
import { ThemeProvider } from "../providers/theme";
import { ThemeChoice } from "../services/theme/contract/theme";
import { lightThemeColors } from "../themes/light";
import { useTheme as sut } from "./theme";

describe("useTheme hook", () => {
  it("should toggle theme color to light", () => {
    const { result } = renderHook(() => sut(), {
      wrapper: ThemeProvider,
    });

    const toggleThemeColorHookFunction = vi.spyOn(
      result.current,
      "toggleThemeColor"
    );

    const themeColorChoice: ThemeChoice = "light";

    act(() => {
      result.current.toggleThemeColor(themeColorChoice);
    });

    expect(toggleThemeColorHookFunction).toHaveBeenNthCalledWith(
      1,
      themeColorChoice
    );
    expect(result.current.colors).toEqual(lightThemeColors);
  });
});
