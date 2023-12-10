import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductsList } from "../helper";
import { AppDispatch, RootState } from "@src/store";
import { Product as ProductType } from "../productsModel";
import Product from "../components/Product";
import { Col, Row, StyledChip } from "@src/styles/style";

const ProductList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const productList: ProductType[] | null = useSelector(
		(state: RootState) => state.products.productsSlice.productsList
	);

	useEffect(() => {
		dispatch(fetchProductsList());
	}, []);
	return (
		<div className="mw-100 mt-10">
			<div className="flex align-items-center ml-5"><h5>Filter By: </h5><StyledChip $variant="default" $isDark={false}>Test</StyledChip></div>
			{productList && productList?.length > 0 && (
				<Row>
					{productList.map((product) => (
						<Col key={product.id} sm={100} md={50} lg={25} xl={25}>
							<Product
								{...product}
							/>
						</Col>
					))}
				</Row>
			)}
		</div>
	);
};

export default ProductList;
