//import { FacetSearchResponseBaseOfProductSearchResultAndFacetResult } from "../../interfaces/product";

export const PRODUCT_SEARCH_RESULT = "PRODUCT_SEARCH_RESULT";

interface ProductSearchAction {
  type: typeof PRODUCT_SEARCH_RESULT;
  payload: any;
}

export type ProductsActionTypes = ProductSearchAction;
