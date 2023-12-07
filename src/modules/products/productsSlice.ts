import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsModel";
import { fetchProductsList } from "./helper";

interface ProductsState {
    productsList: Product[] | null,
    error: string
}

export const initialState: ProductsState = {
	productsList: null,
	error: ""
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
		}).addCase(fetchProductsList.rejected, (_state) => {
			_state.error = "Something went wrong";
		});
	},
});

export const { actions: productsAction} = productsSlice;

export default productsSlice.reducer;
