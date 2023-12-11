import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsModel";
import { fetchCategories, fetchProductsByCategory, fetchProductsList } from "./helper";
import { ErrorCollection, ErrorIdentifier } from "@src/models/commonModels";

interface ProductsState {
    productsList: Product[] | null,
	categories: string[] | null,
    error: ErrorCollection | null,
}

export const initialState: ProductsState = {
	productsList: null,
	categories: null,
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
		});
	},
});

export const { actions: productsAction} = productsSlice;

export default productsSlice.reducer;
