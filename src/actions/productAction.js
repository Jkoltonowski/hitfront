import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL

} from "../constants/productConstants";

export const listProducts = (filters = {}) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // Tworzenie URL z uwzględnieniem wszystkich filtrów
    let url = '/api/products/filter/?';
    const queryParameters = [];

    if (filters.category) {
      queryParameters.push(`category=${filters.category}`);
    }
    if (filters.name) {
      queryParameters.push(`searchTerm=${filters.name}`);
    }
    if (filters.price) {
      if (filters.price.min) {
        queryParameters.push(`minPrice=${filters.price.min}`);
      }
      if (filters.price.max) {
        queryParameters.push(`maxPrice=${filters.price.max}`);
      }
    }

    // Dołączanie parametrów zapytania do URL
    if (queryParameters.length > 0) {
      url += queryParameters.join('&');
    }

    const { data } = await axios.get(url);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};



export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
