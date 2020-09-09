import React from "react";

export default function CardProduct({ product }) {
  return (
    <div>
      {product.free_shipping}
      {product.condition}
      {product.author.nickname}
      {product.author.registration_date}
      {product.price.amount}
      {product.price.currency}
      {product.picture}
      {product.price.decimals}
      <div>{product.title}</div>
    </div>
  );
}

/*
  author: {nickname: "GRUPO KRONER", registration_date: "2018-07-30T14:41:27.000-04:00"}
  condition: "new"
  free_shipping: true
  id: "MLA852250548"
  picture: "http://http2.mlstatic.com/D_970023-MLA43167710046_082020-O.jpg"
  price: {currency: "ARS", amount: 5899, decimals: 0}
  title:
*/
