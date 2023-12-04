import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/authReducer";
import uiReducer from "../modules/shared/ui/uiSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	ui: uiReducer,
});

export default rootReducer;