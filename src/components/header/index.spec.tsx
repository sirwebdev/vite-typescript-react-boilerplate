import {
  fireEvent,
  render,
  RenderResult,
} from "../../test/lib/testing-library-react";
import { HeaderComponent as Sut } from ".";
import { mockLinkClick } from "../../test/mocks";

let sut: RenderResult;

describe("HeaderComponent", () => {
  beforeEach(() => {
    sut = render(<Sut />);
  });

  it("Should redirect user to home page by clicking into project logo", () => {
    const { getByTestId } = sut;

    const headerLogoElement = getByTestId("logo");

    fireEvent.click(headerLogoElement);

    expect(mockLinkClick).toHaveBeenCalledWith("/");
  });
});
