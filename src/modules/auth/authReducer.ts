import { combineReducers } from "redux";

import authSlice from "./authSlice";

const authReducer = combineReducers({
  authSlice: authSlice
});

export default authReducer;