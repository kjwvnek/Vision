import axios from 'axios'

const originURL = 'http://localhost:8000';

export function getUserByEmail(email) {
  const url = `${originURL}/users/${encodeURIComponent(email)}?type=EMAIL`;

  return axios.get(url).then(({ data, status }) => {
    if (status !== 200 && status !== 204) {
      throw new Error(data.message);
    }
  
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
  })
}

export function getUserById(id) {
  const url = `${originURL}/users/${encodeURIComponent(id)}?type=ID`
  
  return axios.get(url).then(({ data, status }) => {
    if (status !== 200 && status !== 204) {
      throw new Error(data.message);
    }
    
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
  })
}
