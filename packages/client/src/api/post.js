import axios from 'axios'

const originURL = 'http://localhost:8000';

export function postUser(email) {
  const url = `${originURL}/users`;
  
  return axios.post(url, { email }).then(({ data, status }) => {
    const {
      id,
      email,
      nickname,
      mentees,
      mentors
    } = data;
  
    return {
      status,
      id,
      email,
      nickname,
      mentees,
      mentors
    };
  });
}
