import { combineReducers } from "redux";
import productsSlice from "./productsSlice";


const productsReducer = combineReducers({
	productsSlice: productsSlice
});

export default productsReducer;