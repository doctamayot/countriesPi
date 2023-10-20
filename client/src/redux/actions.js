import axios from "axios";
import {
  CURRENT_PAGE,
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY,
  UPLOAD_COUNTRIES,
} from "./action.types";

export const uploadCountries = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: UPLOAD_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export const getAllCountries = () => {
  const endpoint = "http://localhost:3001/countries";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export const getCountriesBy = (name) => {
  const endpoint = `http://localhost:3001/countries?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_COUNTRIES_BY,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export const currentAction = (page) => {
  return {
    type: CURRENT_PAGE,
    payload: page,
  };
};
