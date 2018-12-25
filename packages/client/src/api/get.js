import axios from 'axios'
import UserModel from '@/models/User'

const originURL = 'http://localhost:8000';

export function getUserById(id) {
  const url = `${originURL}/users/${encodeURIComponent(id)}`;
  
  return axios.get(url).then(({ data, status }) => {
    if (status !== 200 && status !== 204) {
      throw new Error(data.message);
    }
  
    const result = UserModel(data);
    result.status = status;
  
    return result;
  })
}
