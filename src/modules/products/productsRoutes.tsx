import React, { lazy } from "react";

const ProductsList = lazy(
	() => import("@src/modules/products/containers/ProductList")
);

const ProductsRoutes = () => [
	{
		path: "products",
		element: <ProductsList />
	}
];

export default ProductsRoutes;