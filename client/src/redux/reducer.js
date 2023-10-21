import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY,
  CURRENT_PAGE,
  FILTER_BY_CONTINENT,
  GET_COUNTRY_BY,
  CREATE_ACTIVITY,
} from "./action.types";

const initialState = {
  allCountries: [],
  filteredCountries: [],
  currentPage: 0,
  country: {},
  activity: {
    name: "",
    season: "",
    dificulty: 0,
    duration: 0,
  },
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        filteredCountries: payload,
        allCountries: payload,
      };
    case GET_COUNTRIES_BY:
      return {
        ...state,
        filteredCountries: payload,
        currentPage: 0,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case GET_COUNTRY_BY:
      return {
        ...state,
        country: payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: payload,
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        filteredCountries: payload,
      };

    default:
      return { ...state };
  }
};
