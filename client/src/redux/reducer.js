import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY,
  CURRENT_PAGE,
  FILTER_BY_CONTINENT,
  GET_COUNTRY_BY,
  CREATE_ACTIVITY,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITY,
  ORDER_BY_NAME,
  ORDER_BY_POP,
  CREATE_ACTIVITY_ERROR,
  DELETE_ACTIVITY,
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
  activities: [],
  backupContinents: [],
  activity_error: "",
  activity_error: "",
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        filteredCountries: payload,
        allCountries: payload,
        backupContinents: payload,
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
        activity_error: "",
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activity_error: payload,
      };
    case CREATE_ACTIVITY_ERROR:
      return {
        ...state,
        activity_error: payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activities: payload,
      };
    case FILTER_BY_CONTINENT:
      let filteredByContinent;
      if (payload === "All") {
        filteredByContinent = state.allCountries;
      } else {
        filteredByContinent = state.allCountries.filter(
          (country) => country.continents[0] === payload
        );
      }
      return {
        ...state,
        filteredCountries: filteredByContinent,
        currentPage: 0,
        backupContinents: filteredByContinent,
      };

    case FILTER_BY_ACTIVITY:
      let filteredByActivity;
      if (payload === "none") {
        filteredByActivity = state.backupContinents;
      } else {
        filteredByActivity = state.backupContinents.filter((country) =>
          country.Activities.some((activity) => activity.name === payload)
        );
      }
      return {
        ...state,
        filteredCountries: filteredByActivity,
        currentPage: 0,
      };

    case ORDER_BY_NAME:
      let orderedByName;
      if (payload === "ascending") {
        orderedByName = state.filteredCountries
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "descending") {
        orderedByName = state.filteredCountries
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
      } else {
        orderedByName = state.filteredCountries;
      }
      return {
        ...state,
        filteredCountries: orderedByName,
        currentPage: 0,
      };
    case ORDER_BY_POP:
      let orderedByPop;
      if (payload === "ascending") {
        orderedByPop = state.filteredCountries
          .slice()
          .sort((a, b) => a.poblacion - b.poblacion);
      } else if (payload === "descending") {
        orderedByPop = state.filteredCountries
          .slice()
          .sort((a, b) => b.poblacion - a.poblacion);
      } else {
        orderedByPop = state.filteredCountries;
      }
      return {
        ...state,
        filteredCountries: orderedByPop,
        currentPage: 0,
      };

    default:
      return { ...state };
  }
};
