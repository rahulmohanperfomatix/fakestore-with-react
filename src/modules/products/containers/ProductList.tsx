/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories, fetchProductsByCategory, fetchProductsList } from "../helper";
import { AppDispatch, RootState } from "@src/store";
import { Product as ProductType } from "../productsModel";
import Product from "../components/Product";
import { Col, Row, StyledChip } from "@src/styles/style";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const productList: ProductType[] | null = useSelector(
    (state: RootState) => state.products.productsSlice.productsList
  );
  const categories: string[] | null = useSelector(
    (state: RootState) => state.products.productsSlice.categories
  );

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const getProductsByCategory = (category: string):void => {
    dispatch(fetchProductsByCategory(category));
    setSelectedCategory(category);	
  };

  const getAllProducts = ():void => {
    dispatch(fetchProductsList());
    setSelectedCategory(null);
  };

  return (
    <div className={`${styles['product-list-wrap']} mw-100 mt-10`}>
      <div className="flex align-items-center ml-5 over-flow-x-fix mw-100">
        <h5 className="h5 white-space-nowrap">Filter By: </h5>
        {categories && categories.length > 0 && categories.map((cat, index) => (
          <StyledChip key={index} $variant={selectedCategory === cat ? "primary" : "default"} onClick={() => getProductsByCategory(cat)} $isDark={false}>{cat}</StyledChip>))}
        <StyledChip $variant="reset" $isDark={false} onClick={getAllProducts}>Reset</StyledChip>
      </div>
      {productList && productList?.length > 0 && (
        <Row>
          {productList.map((product) => (
            <Col key={product.id} sm={100} md={50} lg={25} xl={25}>
              <Product {...product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductList;
