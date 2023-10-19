import axios from "axios";
import {
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
export const getCountriesBy = (key) => {
  return {
    type: GET_COUNTRIES_BY,
    payload: key,
  };
};
