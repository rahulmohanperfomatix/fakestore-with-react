import React from "react";
import styles from "./ProductDetails.module.scss";
import { ProductDetails } from "../productsModel";
import { ActionButton } from "@src/styles/style";

interface ProductDetailProps {
    product: ProductDetails;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className={styles.productDetail}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}><strong>Category:</strong> {product.category}</p>
        <div className={styles.rating}>
          <span><strong>Rating:</strong> {product.rating.rate} / 5</span>
          <span> ({product.rating.count} reviews)</span>
        </div>
        <div className="mt-10">
          <ActionButton $isDark={false} $variant="primary">Add to cart</ActionButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
