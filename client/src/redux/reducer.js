import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY,
  CURRENT_PAGE,
} from "./action.types";

const initialState = {
  allCountries: [],
  filteredCountries: [],
  currentPage: 0,
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

    default:
      return { ...state };
  }
};
