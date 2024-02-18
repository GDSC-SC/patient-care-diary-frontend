import axios from "axios";

const defaultAuthorizationInstance = axios.create();
defaultAuthorizationInstance.interceptors.request.use(async (config) => {
    let token: string | undefined;
    token = '';
    // try {
    //   token = localStorage.getAccessToken() ?? undefined;
    //   if (!token) {
    //     throw new Error('Cannot find access token on storage');
    //   }
    // } catch (e) {
    //   window.location.href = '/';
    // }
  
    config.headers.Authorization = `Bearer ${token}`;
  
    return config;
  });