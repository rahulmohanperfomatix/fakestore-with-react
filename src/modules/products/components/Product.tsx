import React from "react";

import Card from "@src/components/Card";
import { Product as ProductType } from "../productsModel";

const Product: React.FC<ProductType> = ({ ...props }) => {
  return (
    <Card isDark={false} height={280} variant="secondary">
      <img className="product-image" src={props.image} alt="Product" />
      <div className="product-title">{props.title}</div>
      <div className="product-price">${props.price}</div>
      <button className="action-button">Add to Cart</button>
    </Card>
  );
};

export default Product;
