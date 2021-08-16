import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://192.163.199.201:5780/MundoDiva/rest/MundoDivaService",
});

export default httpClient;
