import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductsList } from "../helper";
import { AppDispatch, RootState } from "@src/store";
import { Product } from "../productsModel";

const ProductList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const productList: Product[] | null = useSelector((state: RootState) => state.products.productsSlice.productsList);

	useEffect(() => {
		dispatch(fetchProductsList());
	},[]);
	return (
		<div>
			{productList && productList?.length > 0 && 
			<ul>
				{productList.map(product => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
			}
		</div>
	);
};

export default ProductList;