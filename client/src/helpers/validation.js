import axios from "axios";

let ids;
const fetch = async () => {
  const { data } = await axios.get("http://localhost:3001/countries");
  ids = data.map((country) => country.id);
};

fetch();

export const validation = (field, value) => {
  switch (field) {
    case "name":
      if (value.length === 0) {
        return "Name is empty";
      } else if (typeof value !== "string") {
        return "Name must be a string";
      } else if (value.length > 25)
        return "The name must be a maximum of 25 letters ";
      else if (value.length < 2)
        return "The name must be a minimun of 2 letters ";
      break;
    case "season":
      if (value.length === 0) {
        return "Season is empty";
      } else if (typeof value !== "string") {
        return "Season must be a string";
      } else if (value.length > 25) {
        return "The season must be a maximum of 25 letters ";
      } else if (value.length < 3)
        return "The season must be a minimun of 2 letters ";
      break;
    case "duration":
      const valueNumb = Number(value) || "";
      if (value.length === 0) {
        return "Duration is empty";
      } else if (typeof valueNumb !== "number") {
        return "Duration must be a number";
      } else if (valueNumb % 1 !== 0) return "Duration must be a integer";

      break;
    case "dificulty":
      const valueNumbDif = Number(value);
      if (value.length === 0) {
        return "Difficulty is empty";
      } else if (typeof valueNumbDif !== "number") {
        return "Difficulty must be a number";
      } else if (valueNumbDif < 1 || valueNumbDif > 5)
        return "Dificulty must be between 1 and 5";
      else if (valueNumbDif % 1 !== 0) return "Dificulty must be a integer";
      break;
    case "country":
      if (value.length === 0) {
        return "Country is empty";
      } else if (typeof value !== "string") {
        return "Country must be a string";
      } else if (value.length < 3)
        return "Country must be a minimun of 3 letters";
      else if (!value.includes(",")) {
        if (!ids.includes(value)) return "This country not exists!!";
      }
      break;

    default:
      break;
  }
};
