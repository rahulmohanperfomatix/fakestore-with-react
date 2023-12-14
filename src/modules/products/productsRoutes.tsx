import React, { lazy } from "react";
import ProductDetails from "./containers/ProductDetails";

const ProductsList = lazy(
  () => import("@src/modules/products/containers/ProductList")
);

const ProductsRoutes = () => [
  {
    path: "products",
    element: <ProductsList />
  },
  {
    path: "/products/:id",
    element: <ProductDetails />
  },
  {
    path: "/",
    element: <ProductsList />
  },
];

export default ProductsRoutes;