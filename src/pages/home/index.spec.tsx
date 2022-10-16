import { HomePage as Sut } from ".";
import {
  cleanup,
  render,
  RenderResult,
} from "../../test/lib/testing-library-react";

let sut: RenderResult;

describe("@Page - HomePage", () => {
  beforeEach(() => {
    sut = render(<Sut />);
  });

  afterEach(() => {
    cleanup();
  });

  it(`Should render the home page`, () => {
    const { queryByText } = sut;

    const homePageTextElement = queryByText("Home Page");

    expect(homePageTextElement).toBeTruthy();
  });
});
