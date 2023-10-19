import { GET_ALL_COUNTRIES } from "./action.types";

const initialState = {
  allCountries: [],
  filteredCountries: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
      };

    default:
      return { ...state };
  }
};
