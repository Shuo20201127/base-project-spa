import axios from "axios";

const appserve = axios.create({
  baseURL: "https://api.sakeh.hk/api",
});
export default appserve;
