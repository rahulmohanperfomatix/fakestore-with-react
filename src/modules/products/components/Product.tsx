import React from "react";

import Card from "@src/components/Card";
import { Product as ProductType } from "../productsModel";
import { useNavigate } from "react-router-dom";

const Product: React.FC<ProductType> = ({ ...props }) => {
  const navigate = useNavigate();
  const navigateToProductDetailsPage = (productId: number):void => {
    navigate(`/dashboard/products/${productId}`);
  };
  return (
    <Card isDark={false} height={280} variant="secondary">
      <img className="product-image" onClick={() => navigateToProductDetailsPage(props.id)} src={props.image} alt="Product" />
      <div className="product-title cursor-pointer" onClick={() => navigateToProductDetailsPage(props.id)}>{props.title}</div>
      <div className="product-price">${props.price}</div>
      <button className="action-button">Add to Cart</button>
    </Card>
  );
};

export default Product;
