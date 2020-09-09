import React from "react";
import "./CardProduct.scss";
import shipping from "../../images/ic_shipping.png";
import { shippingAtl } from "../../copies/cardProduct";
import { Link } from "react-router-dom";

export default function CardProduct({ product }) {
  return (
    <Link className="card my-3" to={`/items/${product.id}`}>
      <div className="card-img">
        <img className="image" src={product.picture} alt={product.title} />
      </div>
      <div className="card-body mx-3">
        <div className="card-header">
          <h2 className="my-4">
            $ {product.price.amount}
            <span className="px-1">
              {product.free_shipping ? (
                <img src={shipping} alt={shippingAtl} />
              ) : null}
            </span>
          </h2>
          <div className="card-location">
            <p>{product.address}</p>
          </div>
        </div>
        <div className="card-description">
          <h4 className="my-1">{product.title}</h4>
          <h4 className="my-1">{product.condition}</h4>
        </div>
      </div>
    </Link>
  );
}
