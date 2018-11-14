import axios from 'axios'

const originURL = 'http://localhost:8000';

export function getUserByEmail(email) {
  const url = `${originURL}/users?req_type=email&email=${encodeURIComponent(email)}`;

  return axios.get(url).then(({ data, status }) => {
    if (status !== 200 && status !== 204) {
      throw new Error(data.message);
    }

    const { user_id, email, nickname } = data;

    return {
      status,
      user_id,
      email,
      nickname
    };
  })
}