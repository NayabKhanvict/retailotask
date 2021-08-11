import { ProductsActionTypes, PRODUCT_SEARCH_RESULT } from "./types";

interface ProductState {
  result: any;
}

const initialState: ProductState = {
  result: [],
};

export default function CatalogReducer(
  state = initialState,
  action: ProductsActionTypes
) {
  switch (action.type) {
    case PRODUCT_SEARCH_RESULT:
      return { ...state, result: { ...action.payload } };
    default:
      return state;
  }
}
