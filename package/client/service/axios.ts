import axios from 'axios';

const DEV_BASE_URL = 'http://localhost:8081/';
const PROD_BASE_URL = '';

export const AXIOS_BASE_URL = process.env.NODE_ENV === 'dev' ? DEV_BASE_URL : PROD_BASE_URL;
axios.defaults.baseURL = AXIOS_BASE_URL;

export const http = axios;
