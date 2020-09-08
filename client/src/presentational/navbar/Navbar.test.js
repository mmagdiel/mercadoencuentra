import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import {
  mercadolibreLogo,
  searchIcon,
  placeholderSearch,
} from "../../copies/navbar";

test("render the correct placeholder", () => {
  const { getByPlaceholderText } = render(<Navbar />);
  const placeholderText = getByPlaceholderText(placeholderSearch);
  expect(placeholderText).toBeInTheDocument();
});

test("render the alt mercadolibreLogo image", () => {
  const { queryByAltText } = render(<Navbar />);
  const altText = queryByAltText(mercadolibreLogo);
  expect(altText).toBeInTheDocument();
});

test("render the alt searchIcon image", () => {
  const { queryByAltText } = render(<Navbar />);
  const altText = queryByAltText(searchIcon);
  expect(altText).toBeInTheDocument();
});
