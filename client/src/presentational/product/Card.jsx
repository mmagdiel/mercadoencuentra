import React from "react";
import "./Card.scss";
import { callToAction, descriptionText } from "../../copies/product";

export default function Product({ product }) {
  return (
    <div className="row mx-0">
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
      <div className="product my-3 col-xs-12 col-sm-10 col-md-8 col-lg-8">
        <div className="product-image">
          <img
            className="image"
            src={product.item.picture}
            alt={product.item.title}
          />
          <h2>{descriptionText}</h2>
          <p>{product.item.description}</p>
        </div>
        <div className="product-description">
          <div className="product-intro">
            {product.item.condition + " - "}
            <span>{product.item.sold_quantity}</span>
          </div>
          <div className="product-title">{product.item.title}</div>
          <div className="product-price">$ {product.item.price.amount}</div>
          <div className="product-btn">
            <button className="btn">{callToAction}</button>
          </div>
        </div>
      </div>
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
    </div>
  );
}
