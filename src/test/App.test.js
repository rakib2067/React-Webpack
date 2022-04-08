import { render } from "@testing-library/react";
import { Footer } from "../layout/Footer";

import { screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  test("it renders the header footer with relevant text", () => {
    const footer = screen.getByLabelText("footer");
    expect(footer.textContent).toContain("Created by Rakib Ali");
  });
});
