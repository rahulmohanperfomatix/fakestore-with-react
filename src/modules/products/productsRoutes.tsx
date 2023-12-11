import React, { lazy } from "react";

const ProductsList = lazy(
  () => import("@src/modules/products/containers/ProductList")
);

const ProductsRoutes = () => [
  {
    path: "",
    element: <ProductsList />
  },
  {
    path: "products",
    element: <ProductsList />
  }
];

export default ProductsRoutes;