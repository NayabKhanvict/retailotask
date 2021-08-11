import { combineReducers } from 'redux';

import ProductsReducer from './product/reducers';
const combinedReducer = combineReducers({
    products: ProductsReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
