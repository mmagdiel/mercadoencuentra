import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";
import { MemoryRouter } from "react-router-dom";
import { loaderText } from "../../copies/loader";

test("render the correct placeholder", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Loader />
    </MemoryRouter>
  );
  const placeholderText = getByText(loaderText);
  expect(placeholderText).toBeInTheDocument();
});
