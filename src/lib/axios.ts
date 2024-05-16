import axios from "axios";

const https = require("https");

const baseURL = "https://jsonplaceholder.typicode.com/";
const instance = axios.create({
  baseURL,
  timeout: 60000,
  httpsAgent: new https.Agent({ keepAlive: true }),
  headers: { "Content-Type": "application/xml" },
});

export default instance;
