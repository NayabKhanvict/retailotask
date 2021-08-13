import { searchProducts } from "../../services/product";

import { ProductsActionTypes, PRODUCT_SEARCH_RESULT } from "./types";
export const SearchProducts = (term: string) => async (dispatch: any) => {
  var response = await searchProducts(term);
  if (response) {
    const action: ProductsActionTypes = {
      type: PRODUCT_SEARCH_RESULT,
      payload: { ...response },
    };
    dispatch(action);
  }
};
