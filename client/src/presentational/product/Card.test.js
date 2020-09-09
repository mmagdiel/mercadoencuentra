import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import { MemoryRouter } from "react-router-dom";

test("render the correct placeholder", () => {
  const title = "Hidrolavadora Alta Presión Kroner 1400w 105/b Autostop + Acc";
  const product = {
    author: {
      nickname: "GRUPO KRONER",
      registration_date: "2018-07-30T14:41:27.000-04:00",
    },
    condition: "new",
    free_shipping: true,
    id: "MLA852250548",
    picture: "http://http2.mlstatic.com/D_970023-MLA43167710046_082020-O.jpg",
    price: { currency: "ARS", amount: 5899, decimals: 0 },
    title,
  };
  const { getByText } = render(
    <MemoryRouter>
      <Card product={product} />
    </MemoryRouter>
  );
  const titleText = getByText(title);
  expect(titleText).toBeInTheDocument();
});
