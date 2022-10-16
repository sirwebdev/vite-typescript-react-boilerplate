import { ThemeImplementation as SUT } from "./theme";
import { themeChoices } from "../../../themes";

describe("@Service - Theme Service", () => {
  let sut: SUT;

  beforeEach(() => {
    sut = new SUT();
  });

  it("Should load colors from light theme", () => {
    const lightThemeColors = sut.getThemeColors("light");

    expect(lightThemeColors).toEqual(
      expect.objectContaining(themeChoices.light)
    );
  });

  it("Should not be able to  get theme colors from non existent theme choice", () => {
    expect(() => sut.getThemeColors("unknown" as any)).toThrow(
      "Cannot load theme colors from a non existent theme"
    );
  });
});
