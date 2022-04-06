import { render } from "@testing-library/react";
import { Footer } from "../layout/Footer";

import { screen, within } from "@testing-library/react";

describe("App", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("it renders the header footer with relevant text", () => {
    const footer = screen.getByLabelText("footer");
    expect(footer.textContent).toContain("Created by Rakib Ali");
  });
});
