import { WithHeaderTemplate as Sut } from ".";
import {
  cleanup,
  render,
  RenderResult,
} from "../../test/lib/testing-library-react";

let sut: RenderResult;

describe("@Template - WithHeaderTemplate", () => {
  beforeEach(() => {
    sut = render(<Sut />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Should have the header element with home othe page inside", () => {
    const { queryByTestId } = sut;

    const headerElement = queryByTestId("header-container");

    expect(headerElement).toBeTruthy();
  });
});
