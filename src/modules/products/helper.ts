import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleAxiosError } from "@src/api/apiUtils";
import instance from "@src/api/axios";
import { ApiEndpoints } from "@src/enums/apiEndpoints";
import { setLoading } from "../shared/ui/uiSlice";
 
export const fetchProductsList = createAsyncThunk(
	ApiEndpoints.PRODUCTS,
	async (_, { dispatch, rejectWithValue }) => {
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
	}
);