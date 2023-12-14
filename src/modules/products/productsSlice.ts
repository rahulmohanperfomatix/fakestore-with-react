import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductDetails } from "./productsModel";
import { fetchCategories, fetchProductById, fetchProductsByCategory, fetchProductsList } from "./helper";
import { ErrorCollection, ErrorIdentifier } from "@src/models/commonModels";

interface ProductsState {
  productsList: Product[] | null,
  categories: string[] | null,
  productDetails: ProductDetails | null,
  error: ErrorCollection | null,
}

export const initialState: ProductsState = {
  productsList: null,
  categories: null,
  productDetails: null,
  error: null
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    clearState: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsList.fulfilled, (_state, _action) => {
      _state.productsList = _action.payload;
    }).addCase(fetchProductsList.rejected, (_state, _action) => {
      _state.error = [
        ...(_state.error || []),
        { key: ErrorIdentifier.FAILED_FETCH_PRODUCT_LIST, message: _action.payload?.message || "Failed to fetch products" }
      ];
    }).addCase(fetchCategories.fulfilled, (_state, _action) => {
      _state.categories = _action.payload; 
    }).addCase(fetchCategories.rejected, (_state, _action) => {
      _state.error = [
        ...(_state.error || []),
        { key: ErrorIdentifier.FAILED_FETCH_PRODUCT_LIST, message: _action.payload?.message || "Failed to fetch categories" }
      ];
    }).addCase(fetchProductsByCategory.fulfilled, (_state, _action) => {
      _state.productsList = _action.payload;
    }).addCase(fetchProductsByCategory.rejected, (_state, _action) => {
      _state.error = [
        ...(_state.error || []),
        { key: ErrorIdentifier.FAILED_FETCH_PRODUCT_LIST, message: _action.payload?.message || "Failed to fetch products" }
      ];
    }).addCase(fetchProductById.fulfilled, (_state, _action) => {
      _state.productDetails = _action.payload;
    }).addCase(fetchProductById.rejected, (_state, _action) => {
      _state.error = [
        ...(_state.error || []),
        { key: ErrorIdentifier.FAILED_FETCH_PRODUCT_DETAILS, message: _action.payload?.message || "Failed to fetch products details" }
      ];
    });
  },
});

export const { actions: productsAction} = productsSlice;

export default productsSlice.reducer;
