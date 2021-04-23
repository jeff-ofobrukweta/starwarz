import axios from "axios";

export default axios.create({
  baseURL: process.env.baseURL || 'http://swapi.dev/api/',
});
