import axios from "axios";
import {
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_ERROR,
  CURRENT_PAGE,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY,
  GET_COUNTRY_BY,
  ORDER_BY_NAME,
  ORDER_BY_POP,
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

export const getCountry = (id) => {
  const endpoint = `http://localhost:3001/countries/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_COUNTRY_BY,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export const createActivity = (activityData) => {
  const endpoint = "http://localhost:3001/activities";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, { data: activityData });
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: CREATE_ACTIVITY_ERROR,
        payload: error.response.data.message,
      });
    }
  };
};
export const getActivities = () => {
  const endpoint = "http://localhost:3001/activities";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};
export const orderByName = (type) => {
  return {
    type: ORDER_BY_NAME,
    payload: type,
  };
};
export const orderByPop = (type) => {
  return {
    type: ORDER_BY_POP,
    payload: type,
  };
};
