import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});


export const signupRequest = async body => {
  const { data } = await authInstance.post('/users/signup', body);
  return data;
};

export const loginRequest = async body => {
  const { data } = await authInstance.post('/users/login', body);
  return data;
};

export const currentRequest = async token => {
  authInstance.defaults.headers.authorization = `Bearer ${token}`;

  try {
    const { data } = await authInstance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    authInstance.defaults.headers.authorization = '';
    throw error;
  }
};
