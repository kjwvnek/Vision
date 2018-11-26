import axios from 'axios'
import UserModel from '@models/User'

const originURL = 'http://localhost:8000';

export function postUser(email) {
  const url = `${originURL}/users`;
  
  return axios.post(url, { email }).then(({ data, status }) => {
    const result = UserModel(data);
    result.status = status;
  
    return result;
  });
}

export function login(email) {
  const url = `${originURL}/users/login`;
  
  return axios.post(url, { email }).then(({ data, status }) => {
    const result = UserModel(data);
    result.status = status;
    
    return result;
  });
}
