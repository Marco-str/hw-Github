import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const ORDER_PRODUCTS ='ORDER_PRODUCTS';
export const GET_BY_NAME='GET_BY_NAME';
export const GET_DETAIL='GET_DETAIL'
export const SET_PAGE='SET_PAGE';
export const CLEAN_STORE='CLEAN_STORE';
export const FILTER_BY_CATEGORY='FILTER_BY_CATEGORY';
export const FILTER_BY_PRICE='FILTER_BY_PRICE';
export const FILTER_BY_GENDER = 'FILTER_BY_GENDER';

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get("http://localhost:3001/products");
      dispatch({ type: GET_ALL_PRODUCTS, payload: products.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProductByName = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get("http://localhost:3001/products");
      dispatch({ type: GET_BY_NAME, payload: products.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getCategories() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/types`);
      dispatch({
        type: GET_CATEGORIES,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function orderByName(payload) {
  return {
    type: ORDER_PRODUCTS,
    payload
  };
};

export function getDetail(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/pokemons/${id}`);
      dispatch({
        type: GET_DETAIL,
        payload: response.data
      });
    } catch (error) {
      console.log('PROD not found');
    }
  };
};


export function filterByCategory(payload) {
  return {
    type: FILTER_BY_CATEGORY,
    payload
  };
};

export function filterByPrice(priceRange) {
  return {
    type: FILTER_BY_PRICE,
    payload: priceRange,
  };
};

export function filterByGender(gender) {
  return {
    type: FILTER_BY_GENDER,
    payload: gender,
  };
}

export function createPubli(pokenuevo) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/pokemons`, pokenuevo);
      console.log('pokemon created por redux');
    } catch (error) {
      console.log(error.message);
      alert('no creo pokemon porque no quiero');
    }
  };
};


export function cleanMyStore() {
  return {
    type: CLEAN_STORE,
  };
}


export function setPage() {
  return {
    type: SET_PAGE,
  };
}