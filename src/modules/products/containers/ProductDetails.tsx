import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../helper";
import { AppDispatch, RootState } from "@src/store";
import ProductDetail from "../components/ProductDetails";
import { TextButton } from "@src/styles/style";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const productDetails = useSelector(
    (state: RootState) => state.products.productsSlice.productDetails
  );

  useEffect(() => {
    dispatch(fetchProductById(id || ""));
  }, []);

  const navigateBack = ():void => {
    navigate(-1);
  };

  return (
    <div>
      <TextButton onClick={navigateBack} className="mb-10 mt-10">Go Back</TextButton>
      {productDetails && <ProductDetail product={productDetails} />}
    </div>
  );
};

export default ProductDetails;
