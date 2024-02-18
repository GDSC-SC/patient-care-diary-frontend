import axios from "axios";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const defaultAuthorizationInstance = axios.create();
defaultAuthorizationInstance.interceptors.request.use(async (config) => {
    // config.headers.Authorization = `Bearer ${accessToken}`;
  
    return config;
  });