import { createStore, combineReducers } from "redux";
import ProductReducer from "./product/reducers";

const rootReducer = combineReducers({
  product: ProductReducer,
});

export default createStore(rootReducer);
