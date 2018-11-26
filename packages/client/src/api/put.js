import axios from 'axios'

const originURL = 'http://localhost:8000';

export function putUserInfo(user) {
  const url = `${originURL}/users/${encodeURIComponent(user.id)}?type=INFO`;
  
  return axios.put(url, user).then(({ status }) => ({ status }));
}
