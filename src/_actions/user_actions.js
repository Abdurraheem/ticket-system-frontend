import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    GET_USERS
} from './types';
import { USER_SERVER } from '../Config';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    const token = window.localStorage.getItem('authToken');
    config.headers.Authorization =  token;
    return config;
});

export const interceptor = () => {
    axios.interceptors.response.use(
      response => {
        // Return a successful response back to the calling service
        return response;
      },
      async error => {
        // Return any error which is not due to authentication back to the calling service
        if (error && error.response && error.response.status === 401) {
         window.location.href = '/'
        } else {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      }
    );
  };
  
  // Register interceptor
  interceptor();
export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => {
                    window.localStorage.setItem('authToken', response.data.token);
                    window.localStorage.setItem('permission', JSON.stringify(response.data.permission));
                    return response.data
                });

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    console.log('in logout')
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => {
        window.localStorage.setItem('authToken', '');
        return response.data;
    });

    return {
        type: LOGOUT_USER,
        payload: request
    }
}


export function getUsers(){
    const request = axios.get(`${USER_SERVER}/getUsers`)
        .then(response => response.data);
    console.log("get users request is",request);
    return {
        type: GET_USERS,
        payload: request
    }
}
