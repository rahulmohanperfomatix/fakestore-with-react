import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/authReducer";
import uiReducer from "../modules/shared/ui/uiSlice";
import productsReducer from "@src/modules/products/productsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  products: productsReducer
});

export default rootReducer;