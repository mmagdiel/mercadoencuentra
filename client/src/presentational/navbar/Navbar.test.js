import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import {
  mercadolibreLogo,
  searchIcon,
  placeholderSearch,
} from "../../copies/navbar";

test("render the correct placeholder", () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const placeholderText = getByPlaceholderText(placeholderSearch);
  expect(placeholderText).toBeInTheDocument();
});

test("render the alt mercadolibreLogo image", () => {
  const { queryByAltText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const altText = queryByAltText(mercadolibreLogo);
  expect(altText).toBeInTheDocument();
});

test("render the alt searchIcon image", () => {
  const { queryByAltText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const altText = queryByAltText(searchIcon);
  expect(altText).toBeInTheDocument();
});
