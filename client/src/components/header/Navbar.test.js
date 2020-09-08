import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { placeholderSearch } from "../../copies/navbar";

test("renders the correct placeholder", () => {
  const { getByPlaceholderText } = render(<Navbar />);
  const linkElement = getByPlaceholderText(placeholderSearch);
  expect(linkElement).toBeInTheDocument();
});
