import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

function Product({ product }) {
  return (
    <div className="product-card my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <img className="product-img" src={product.image} alt={product.name} />
      </Link>

      <div className="product-body">
        <Link to={`/product/${product._id}`}>
          <div className="product-title">
            <strong>{product.name}</strong>
          </div>
        </Link>

        <div className="product-price">
            {product.price} PLN
        </div>
      </div>
    </div>
  );
}

export default Product;
