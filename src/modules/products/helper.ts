import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse, handleAxiosError } from "@src/api/apiUtils";
import instance from "@src/api/axios";
import { ApiEndpoints } from "@src/enums/apiEndpoints";
import { setLoading } from "../shared/ui/uiSlice";
import { Product } from "./productsModel";

export const fetchProductsList = createAsyncThunk<
  Product[],
  void,
  {
    rejectValue: ErrorResponse;
  }
>(ApiEndpoints.PRODUCTS, async (_, { dispatch, rejectWithValue }) => {
	try {
		dispatch(setLoading(true));
		const response = await instance.get(ApiEndpoints.PRODUCTS);
		dispatch(setLoading(false));
		return response.data; // Assuming the response data contains the products list
	} catch (error) {
		dispatch(setLoading(false));
		// Error handling: return a custom error message or pass the error object
		return rejectWithValue(handleAxiosError(error));
	}
});

export const fetchCategories = createAsyncThunk<
  string[],
  void,
  {
    rejectValue: ErrorResponse;
  }
>(ApiEndpoints.CATEGORIES, async (_, { dispatch, rejectWithValue }) => {
	try {
		dispatch(setLoading(true));
		const response = await instance.get(ApiEndpoints.CATEGORIES);
		dispatch(setLoading(false));
		return response.data;
	} catch (error) {
		dispatch(setLoading(false));
		return rejectWithValue(handleAxiosError(error));
	}
});

export const fetchProductsByCategory = createAsyncThunk<
  Product[],
  string,
  { rejectValue: ErrorResponse }
>(ApiEndpoints.CATEGORY, async (category, { dispatch, rejectWithValue }) => {
	try {
		dispatch(setLoading(true));
		const response = await instance.get(
			`${ApiEndpoints.CATEGORY}/${category}`
		);
		dispatch(setLoading(false));
		return response.data;
	} catch (error) {
		dispatch(setLoading(false));
		return rejectWithValue(handleAxiosError(error));
	}
});
