import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "@src/api/axios";
import { AuthDetailsForLogin } from "./authModels";
import { ApiEndpoints } from "../../enums/apiEndpoints";
import { handleAxiosError } from "../../api/apiUtils";
import { setLoading } from "../shared/ui/uiSlice";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  ApiEndpoints.LOGIN,
  async (credentials: AuthDetailsForLogin, {dispatch, rejectWithValue}) => {
    try {
      dispatch(setLoading(true));
      const response = await instance.post(ApiEndpoints.LOGIN, credentials);
      dispatch(setLoading(false));
      toast("Login Successful.");
      return  { ...response.data, username: credentials.username };
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("Login failed!");
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

