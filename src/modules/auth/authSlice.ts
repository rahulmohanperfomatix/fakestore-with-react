import { createSlice } from "@reduxjs/toolkit";

import { AuthDetailsAfterLogin } from "./authModels";
import { setLoading } from "../shared/ui/uiSlice";
import { loginUser } from "./helper";
import { setItem } from "@src/utils/utils";
import { LocalStorageEnum } from "@src/enums/common";

interface AuthState {
 isLoggedIn: boolean,
 authDetailsAfterLogin: AuthDetailsAfterLogin,
}

const initialState: AuthState = {
  isLoggedIn: false,
  authDetailsAfterLogin: {
    token: "",
    username: "",
    error: ""
  }
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    clearState: () => initialState,
    logout: (state) => {
      state.authDetailsAfterLogin = {
        token: "",
        username: "",
        error: ""
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (_state, _action) => {
      setLoading(false);
      if(_state.authDetailsAfterLogin){
        _state.isLoggedIn = true;
        const authDetails: AuthDetailsAfterLogin = {
          username: _action.payload.username,
          token: _action.payload.token,
          error: ""
        };
        _state.authDetailsAfterLogin = {...authDetails};
        setItem(LocalStorageEnum.AUTH_DETAILS, JSON.stringify(authDetails));
      }
    }).addCase(loginUser.rejected, (state, action) => {
      state.authDetailsAfterLogin.error = action.payload as string;
      state.authDetailsAfterLogin.token = "";
    });
  }
});

export const { actions: authActions} = authSlice;

export default authSlice.reducer;

