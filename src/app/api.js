import axios from 'axios'
const baseURL = process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE

export const articleApi = axios.create({
    baseURL: `${baseURL}/articles`,
    
  });

  export const productApi = axios.create({
    baseURL: `${baseURL}/products`,
    
  });